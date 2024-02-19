import { NextResponse } from "next/server";

import databaseClient from "@repo/database";
import { NextRequest } from "@repo/next-utils";

import { getWaitlistKey, TproductNames } from "./utils";

export type GetWaitlistHandlerProps = {
  productName: TproductNames;
  onSuccess?: (req: NextRequest) => void;
};

export function getWaitlistHandler(props: GetWaitlistHandlerProps) {
  return async (req: NextRequest) => {
    // get waitlist key
    const waitlistKey = getWaitlistKey(props.productName);

    // check if user's email is already in the waitlist
    const waitlistEntry = await databaseClient.waitlist.findFirst({
      where: {
        email: req.session!.user!.email || "",
      },
    });

    // check if the user is already in the waitlist for the product
    if (waitlistEntry) {
      // @ts-ignore-next-line
      if (!waitlistEntry[waitlistKey]) {
        await databaseClient.waitlist.update({
          where: {
            id: waitlistEntry.id,
          },
          data: {
            [waitlistKey]: true,
          },
        });

        if (props.onSuccess) {
          props.onSuccess(req);
        }
      }
    }
    // create the waitlist entry
    else {
      await databaseClient.waitlist.create({
        data: {
          email: req.session!.user!.email || "",
          [waitlistKey]: true,
        },
      });

      if (props.onSuccess) {
        props.onSuccess(req);
      }
    }

    return NextResponse.json({}, { status: 201 });
  };
}
