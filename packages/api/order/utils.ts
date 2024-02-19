import zod from "zod";

import type { Payment, Product } from "@prisma/client";

type GetOrderOptionsProps = {
  product: Product;
  notes: object;
  paymentObject: Payment;
};

function getReceiptId(paymentId: string, productName: string) {
  const probableReceiptId = `${paymentId.slice(0, 6)}-${productName}`;
  return probableReceiptId.slice(0, 40);
}

export function getOrderOptions(props: GetOrderOptionsProps) {
  return {
    amount: props.product.price,
    currency: "INR",
    receipt: getReceiptId(props.paymentObject.id, props.product.name),
    notes: {
      ...props.notes,
      paymentId: props.paymentObject.id,
      productId: props.product.id,
      productName: props.product.name,
      amountHumanized: `$ ${props.product.price / 100}`,
    },
  };
}

export const OrderPostInputSchema = zod.object({
  productId: zod.string(),
});
export type TorderPostInput = zod.infer<typeof OrderPostInputSchema>;
