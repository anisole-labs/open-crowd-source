import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";

import databaseClient from "@repo/database";

export type GetWebhookHandlerProps = {
  onOrderPaid: (event: any) => Promise<void>;
};

export function getWebhookHandler(props: GetWebhookHandlerProps) {
  return async (req: NextRequest) => {
    const body = await req.text();
    const webhookSignature = headers().get("X-Razorpay-Signature") as string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let event: any;

    try {
      const vadilationStatus = validateWebhookSignature(
        body,
        webhookSignature,
        process.env.RAZORPAY_WEBHOOK_SECRET as string,
      );

      if (!vadilationStatus) {
        return NextResponse.json(
          {
            error: "Invalid signature",
          },
          { status: 400 },
        );
      }

      event = JSON.parse(body);
    } catch (error) {
      return NextResponse.json(
        {
          error: "Unknown error",
        },
        { status: 400 },
      );
    }

    if (event.event === "order.paid") {
      const order = event.payload.order.entity;

      // update payments object in the database
      const dbPaymentId = order.notes.paymentId;
      const dbPayment = await databaseClient.payment.findUnique({
        where: {
          id: dbPaymentId,
        },
      });
      if (!dbPayment) {
        return NextResponse.json(
          {
            error: "Payment not found",
          },
          { status: 400 },
        );
      }
      await databaseClient.payment.update({
        where: {
          id: dbPaymentId,
        },
        data: {
          status: "SUCCESS",
        },
      });

      await props.onOrderPaid(event);
    }

    return NextResponse.json({}, { status: 200 });
  };
}
