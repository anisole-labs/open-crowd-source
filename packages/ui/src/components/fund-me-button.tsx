"use client";

import { signIn, useSession } from "next-auth/react";

import { Button } from "@ui/components/ui/button";

type FundMeButtonProps = {
  className?: string;
};

export const FundMeButton = (props: FundMeButtonProps) => {
  const { data: session } = useSession();

  const handleFundMeButtonClick = async () => {
    console.debug("Fund Me Button Clicked");
  };

  if (!session) {
    return (
      <Button
        className={props.className}
        onClick={() => {
          signIn("google");
        }}
      >
        Sign In To Take Part
      </Button>
    );
  }

  return (
    <Button className={props.className} onClick={handleFundMeButtonClick}>
      Fund Us
    </Button>
  );
};
