import type { Product } from "@prisma/client";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

import databaseClient from "@repo/database";
import { APIError, NextRequest, SessionUser } from "@repo/next-utils";

import { getOrderOptions, OrderPostInputSchema } from "./utils";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

type PaymentProcessorProps = {
  user: SessionUser;
  product: Product;
  unique?: boolean;
};

async function paymentProcessor(
  props: PaymentProcessorProps,
): Promise<NextResponse> {
  // init razorpay object
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_ID as string,
    key_secret: process.env.RAZORPAY_KEY as string,
  });

  // check if payment exists
  if (props.unique) {
    const payment = await databaseClient.payment.findFirst({
      where: {
        user: {
          id: props.user.id,
        },
        product: {
          id: props.product.id,
        },
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
          id: props.user.id,
        },
      },
      product: {
        connect: {
          id: props.product.id,
        },
      },
    },
  });

  // init orders creation object
  const paymentOptions = getOrderOptions({
    product: props.product,
    notes: {
      userId: props.user.id,
      userEmail: props.user.email,
    },
    paymentObject,
  });
  const razorpayOrder = await razorpay.orders.create(paymentOptions);

  return NextResponse.json(
    {
      processor: "razorpay",
      razorpay: {
        id: razorpayOrder.id,
        name: props.product.name,
        currency: razorpayOrder.currency,
        amount: razorpayOrder.amount,
        user: {
          name: props.user.name,
          email: props.user.email,
        },
      },
    },
    { status: 201 },
  );
}

export function getOrderCreationHandler(unique?: boolean) {
  return async (req: NextRequest) => {
    const parsedBody = OrderPostInputSchema.safeParse(req.body);
    if (!parsedBody.success) {
      throw new APIError(
        {
          title: "Invalid request body",
          desc: "Please provide a valid product id",
        },
        400,
      );
    }

    // fetch product from database
    const product = await databaseClient.product.findUnique({
      where: {
        id: parsedBody.data.productId,
      },
    });
    if (!product) {
      throw new APIError(
        {
          title: "Invalid product id",
          desc: "Please provide a valid product id",
        },
        400,
      );
    }

    return await paymentProcessor({
      user: req.session!.user,
      product,
      unique,
    });
  };
}
