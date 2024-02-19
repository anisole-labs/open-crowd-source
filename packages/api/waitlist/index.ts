import { NextResponse } from "next/server";

import databaseClient from "@repo/database";
import { NextRequest } from "@repo/next-utils";

export type GetWaitlistHandlerProps = {
  onSuccess?: (req: NextRequest) => void;
};

export function getWaitlistHandler(props: GetWaitlistHandlerProps) {
  return async (req: NextRequest) => {
    // check if user's email is already in the waitlist
    const waitlistEntry = await databaseClient.waitlist.findFirst({
      where: {
        email: req.session!.user!.email || "",
      },
    });

    if (!waitlistEntry) {
      await databaseClient.waitlist.create({
        data: {
          email: req.session!.user!.email || "",
        },
      });

      if (props.onSuccess) {
        props.onSuccess(req);
      }
    }

    return NextResponse.json({}, { status: 201 });
  };
}
