import type { Payment } from "@prisma/client";

export const products = {
  "gym-notes-early-bird": {
    amount: 599,
    currency: "USD",
  },
  "gym-notes": {
    amount: 1199,
    currency: "USD",
  },
  "reading-wrap-up-early-bird": {
    amount: 299,
    currency: "USD",
  },
  "reading-wrap-up": {
    amount: 799,
    currency: "USD",
  },
};

type Tmilestones = {
  amountGoal: number;
  date: string;
};

export const milestones: Record<TproductNames, Tmilestones> = {
  "gym-notes-early-bird": {
    amountGoal: 10000,
    date: "2024-05-15",
  },
  "gym-notes": {
    amountGoal: 10000,
    date: "2024-05-15",
  },
  "reading-wrap-up-early-bird": {
    amountGoal: 5000,
    date: "2024-05-15",
  },
  "reading-wrap-up": {
    amountGoal: 5000,
    date: "2024-05-15",
  },
};

export type TproductNames = keyof typeof products;

type GetOrderOptionsProps = {
  productName: TproductNames;
  notes: object;
  paymentObject: Payment;
};

export function getOrderOptions({
  productName,
  notes,
  paymentObject,
}: GetOrderOptionsProps) {
  return {
    amount: products[productName].amount,
    currency: products[productName].currency,
    receipt: `anisole-${productName}-${paymentObject.id.slice(0, 4)}`,
    notes: {
      ...notes,
      paymentId: paymentObject.id,
      productName,
      amountHumanized: `$ ${products[productName].amount / 100}`,
    },
  };
}

export function getWaitlistKey(productName: TproductNames) {
  // switch statement to handle different products
  switch (productName) {
    case "gym-notes-early-bird":
      return "gymNotes";
    case "gym-notes":
      return "gymNotes";
    case "reading-wrap-up-early-bird":
      return "readingWrapUp";
    case "reading-wrap-up":
      return "readingWrapUp";
  }
}
