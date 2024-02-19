"use client";

import { Loader2 } from "lucide-react";

import { Button, ButtonProps } from "@ui/components/ui/button";
import useApi, { GeneralRequestProps } from "@ui/hooks/use-api";

export type UrlButtonProps = GeneralRequestProps & ButtonProps;

export const UrlButton = (props: UrlButtonProps) => {
  const api = useApi();
  const { url, method, body, headers, onSuccess, onError, ...buttonProps } =
    props;

  const handleClick = async () => {
    api.request({ url, method, body, headers, onSuccess, onError });
  };

  return (
    <Button onClick={handleClick} {...buttonProps}>
      {api.loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <div className="sr-only">Loading</div>
        </>
      ) : (
        props.children
      )}
    </Button>
  );
};
