import { NextResponse } from "next/server";

import databaseClient from "@repo/database";
import { NextRequest } from "@repo/next-utils";

export type CrowdsourceResponseType = {
  numberOfBackers: number;
  amountBacked: number;
  milestone: {
    amountGoal: number;
    date: string;
  };
};

export type GetCrowdsourceHandlerProps = {
  milestone: {
    amountGoal: number;
    date: string;
  };
};

export function getCrowdsourceHandler(props: GetCrowdsourceHandlerProps) {
  return async (req: NextRequest) => {
    // get all payment entries with productName
    const paymentEntries = await databaseClient.payment.findMany({
      where: {
        status: "SUCCESS",
      },
      include: {
        product: true,
      },
    });

    // get count of payment entries
    const numberOfBackers = paymentEntries.length;

    // get total amount of payments
    const amountBacked = paymentEntries.reduce((acc, payment) => {
      return acc + payment.product.price;
    }, 0);

    const responseJson: CrowdsourceResponseType = {
      numberOfBackers,
      amountBacked,
      milestone: props.milestone,
    };

    return NextResponse.json(responseJson, {
      status: 200,
    });
  };
}
