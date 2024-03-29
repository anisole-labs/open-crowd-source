import { getWaitlistHandler, GetWaitlistHandlerProps } from "@repo/api";
import { sendMailFromTemplate } from "@repo/email";
import { withAuthentication } from "@repo/next-utils";

import { getServerAuthSession } from "@open-crowd-source/lib/auth";

const props: GetWaitlistHandlerProps = {
  onSuccess: (req) => {
    sendMailFromTemplate({
      subject: "Welcome to the club!",
      toEmail: req.session!.user.email || "",
      template: "waitlist.hbs",
      templateParams: {
        customerName: req.session!.user.name,
      },
    });
  },
};

export const POST = withAuthentication(
  getWaitlistHandler(props),
  getServerAuthSession,
);
