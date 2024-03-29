"use client";

import { signIn, useSession } from "next-auth/react";
import Script from "next/script";

import { Button } from "@ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/components/ui/card";
import { TypographyPBalance } from "@ui/components/ui/typography";
import { useToast } from "@ui/components/ui/use-toast";
import { UrlButton, UrlButtonProps } from "@ui/components/url-button";

export type ProductCardsProps = {
  title: string;
  description: string;
  discountedPrice?: string;
  originalPrice?: string;
  content: string;
  buttonLink: string;
  buttonText: string;
  requestBody: any;
  disabled?: boolean;
};

export const ProductCard = (props: ProductCardsProps) => {
  const { data: session } = useSession();
  const { toast } = useToast();

  const showPaymentSuccessToast = () => {
    toast({
      title: "Success!",
      description: "Payment successful!",
    });
  };

  const showPaymentFailureToast = () => {
    toast({
      title: "Failure!",
      description: "Payment failed!",
    });
  };

  const showGenericSuccessToast = () => {
    toast({
      title: "Success!",
      description: "Action successful!",
    });
  };

  const handleRazorpay = (data: any) => {
    const razorpayOptions = {
      order_id: data.razorpay.id,
      name: data.razorpay.name,
      currency: data.razorpay.currency,
      amount: data.razorpay.amount,
      handler: function (response: any) {
        showPaymentSuccessToast();
        console.debug(response, session);
      },
      prefill: {
        name: data.razorpay.user.name,
        email: data.razorpay.user.email,
      },
    };

    const razorpayPaymentObject = new (window as any).Razorpay(razorpayOptions);
    razorpayPaymentObject.open();

    razorpayPaymentObject.on("payment.failed", function (response: any) {
      showPaymentFailureToast();
      console.debug(response, session);
    });
  };

  const onSuccess = (data: any) => {
    if (data.processor && data.processor === "razorpay") {
      handleRazorpay(data);
    } else {
      showGenericSuccessToast();
    }
  };

  const GetButton = () => {
    if (!session) {
      return (
        <Button
          onClick={() => {
            signIn("google");
          }}
        >
          Sign In To Take Part
        </Button>
      );
    }

    const urlButtonProps: UrlButtonProps = {
      url: props.buttonLink,
      method: "POST",
      body: props.requestBody,
      onSuccess: onSuccess,
      disabled: props.disabled,
    };

    return <UrlButton {...urlButtonProps}>{props.buttonText}</UrlButton>;
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <Card className="min-h-[50%] text-center">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Price Section */}
          {(props.discountedPrice || props.originalPrice) && (
            <div className="flex flex-col md:flex-row justify-center content-end space-x-2">
              {props.discountedPrice && (
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] inline">
                  {props.discountedPrice}
                </h1>
              )}
              {props.originalPrice && (
                <h2 className="line-through text-lg font-bold leading-tight tracking-tighter sm:text-xl inline md:self-end">
                  {props.originalPrice}
                </h2>
              )}
            </div>
          )}

          <TypographyPBalance>{props.content}</TypographyPBalance>
        </CardContent>
        <CardFooter className="pt-8 justify-center">
          <GetButton />
        </CardFooter>
      </Card>
    </>
  );
};
