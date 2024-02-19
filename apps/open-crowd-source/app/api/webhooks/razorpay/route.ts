import { getWebhookHandler } from "@repo/api";

import { webhookProps } from "@open-crowd-source/lib/razorpay";

export const POST = getWebhookHandler(webhookProps);
