import { NextResponse } from "next/server";
import Razorpay from "razorpay";

import databaseClient from "@repo/database";
import { APIError, NextRequest, SessionUser } from "@repo/next-utils";

import { getOrderOptions, TproductNames } from "./utils";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

type PaymentProcessorProps = {
  user: SessionUser;
  productName: TproductNames;
  unique?: boolean;
};

async function paymentProcessor({
  user,
  productName,
  unique,
}: PaymentProcessorProps): Promise<NextResponse> {
  // init razorpay object
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_ID as string,
    key_secret: process.env.RAZORPAY_KEY as string,
  });

  // check if payment exists
  if (unique) {
    const payment = await databaseClient.payment.findFirst({
      where: {
        user: {
          id: user.id,
        },
        productName,
        status: "SUCCESS",
      },
    });

    if (payment) {
      console.debug(
        "Existing payment found and 'unique' is true, skipping payment creation",
      );

      throw new APIError(
        {
          title: "You already have an active subscription",
          desc: "You can only have one active subscription at a time",
        },
        400,
      );
    }
  }

  // record payment in database
  const paymentObject = await databaseClient.payment.create({
    data: {
      user: {
        connect: {
          id: user.id,
        },
      },
      productName,
    },
  });

  // init orders creation object
  const paymentOptions = getOrderOptions({
    productName,
    notes: {
      userId: user.id,
      userEmail: user.email,
      paymentId: paymentObject.id,
      productName,
    },
    paymentObject,
  });
  const razorpayOrder = await razorpay.orders.create(paymentOptions);

  return NextResponse.json(
    {
      processor: "razorpay",
      razorpay: {
        id: razorpayOrder.id,
        name: productName,
        currency: razorpayOrder.currency,
        amount: razorpayOrder.amount,
        user: {
          name: user.name,
          email: user.email,
        },
      },
    },
    { status: 201 },
  );
}

export function getOrderCreationHandler(
  productName: TproductNames,
  unique?: boolean,
) {
  return async (req: NextRequest) => {
    return await paymentProcessor({
      user: req.session!.user,
      productName,
      unique,
    });
  };
}
