import { GetWebhookHandlerProps } from "@repo/api";
import databaseClient from "@repo/database";
import { sendMailFromTemplate } from "@repo/email";
import { APIError } from "@repo/next-utils";

export const webhookProps: GetWebhookHandlerProps = {
  onOrderPaid: async (event) => {
    // things todo
    // 1. if the product is earlyBird then mark the user as earlyBird
    // and send earlyBird welcome email
    // 2. send receipt to the user
    const order = event.payload.order.entity;
    const userId = order.notes.userId;
    const paymentId = order.notes.paymentId;

    const user = await databaseClient.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new APIError(
        {
          title: "User not found",
        },
        404,
      );
    }

    if (order.notes.productName === "gym-notes-early-bird") {
      const payment = await databaseClient.payment.findUnique({
        where: {
          id: paymentId,
          productName: order.notes.productName,
        },
      });
      if (!payment) {
        console.error("Payment not found", paymentId, order.notes.productName);
        throw new APIError(
          {
            title: "Payment not found",
          },
          404,
        );
      }

      await databaseClient.user.update({
        where: {
          id: userId,
        },
        data: {
          earlyBirdGymNotes: true,
        },
      });

      sendMailFromTemplate({
        subject: "Welcome to the Early Bird Club!",
        toEmail: user.email || "",
        template: "waitlist.hbs",
        templateParams: {
          customerName: user.name,
        },
      });

      sendMailFromTemplate({
        subject: "Gym Notes Payment Receipt",
        toEmail: user.email || "",
        template: "payment-receipt.hbs",
        templateParams: {
          customerName: user.name,
          payment: {
            id: payment.id,
            amount: order.notes.amountHumanized,
            updated: payment.updated,
          },
        },
      });
    }
  },
};
