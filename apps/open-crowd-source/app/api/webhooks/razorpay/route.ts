import { getWebhookHandler } from "@repo/api";

import { webhookProps } from "@gym-notes/lib/razorpay";

export const POST = getWebhookHandler(webhookProps);
