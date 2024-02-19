import { NextResponse } from "next/server";

import databaseClient from "@repo/database";
import { NextRequest } from "@repo/next-utils";

import { TproductNames, milestones, products } from "./utils";

export type CrowdsourceResponseType = {
  numberOfBackers: number;
  amountBacked: number;
  milestone: {
    amountGoal: number;
    date: string;
  };
};

export function getCrowdsourceHandler(productName: TproductNames) {
  return async (req: NextRequest) => {
    // get all payment entries with productName
    const paymentEntries = await databaseClient.payment.findMany({
      where: {
        productName,
        status: "SUCCESS",
      },
    });

    // get count of payment entries
    const numberOfBackers = paymentEntries.length;

    // get total amount of payments
    const amountBacked = paymentEntries.reduce((acc, payment) => {
      return acc + products[productName].amount;
    }, 0);

    const responseJson: CrowdsourceResponseType = {
      numberOfBackers,
      amountBacked,
      milestone: milestones[productName],
    };

    return NextResponse.json(responseJson, {
      status: 200,
    });
  };
}
