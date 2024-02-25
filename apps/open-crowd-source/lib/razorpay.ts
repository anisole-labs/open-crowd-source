import { GetWebhookHandlerProps } from "@repo/api";
import databaseClient from "@repo/database";
import { sendMailFromTemplate } from "@repo/email";
import { APIError } from "@repo/next-utils";

export const webhookProps: GetWebhookHandlerProps = {
  onOrderPaid: async (event) => {
    const order = event.payload.order.entity;
    const userId = order.notes.userId;

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

    const payment = await databaseClient.payment.findUnique({
      where: {
        id: order.notes.paymentId,
      },
    });
    if (!payment) {
      throw new APIError(
        {
          title: "Payment not found",
        },
        404,
      );
    }

    sendMailFromTemplate({
      subject: "Payment Receipt",
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
  },
};
