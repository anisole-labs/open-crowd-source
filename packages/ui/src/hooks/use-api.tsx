"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import { useState } from "react";

import { ToastAction } from "@ui/components/ui/toast";
import { useToast } from "@ui/components/ui/use-toast";

export type GeneralRequestProps = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: any;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
};

export type SpecificRequestProps = {
  url: string;
  body?: any;
  headers?: any;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
};

function useApi() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // helper functions

  const onSuccess = (data: any, onSuccess?: (data: any) => void) => {
    setLoading(false);
    if (onSuccess) {
      onSuccess(data);
    }
  };

  const showGenericErrorToast = () => {
    toast({
      title: "Oops! Requested action cannot be completed",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
  };

  const showErrorToast = (response: any) => {
    if (response?.title) {
      toast({
        title: response.title,
        description: response?.desc,
        variant: "destructive",
      });
    } else {
      showGenericErrorToast();
    }
  };

  const showLoginToast = () => {
    toast({
      title: "Uh oh! You are logged out.",
      description: "Login to continue.",
      action: (
        <ToastAction
          altText="Login"
          onClick={() => {
            signIn("google");
          }}
        >
          Login
        </ToastAction>
      ),
    });
  };

  const onError = (error: any, onError?: (error: any) => void) => {
    setLoading(false);
    showErrorToast(error);
    if (onError) {
      onError(error);
    }
  };

  const request = async (props: GeneralRequestProps) => {
    setLoading(true);

    try {
      const response = await axios({
        method: props.method || "GET",
        url: props.url,
        data: props.body,
        headers: props.headers,
      });
      console.debug("Response from API", props, response);

      if (response.status >= 200 && response.status < 300) {
        onSuccess(response.data, props.onSuccess);
        return response.data;
      } else {
        if (response.status === 401) {
          showLoginToast();
        } else {
          showErrorToast(response.data);
        }
      }
    } catch (error) {
      console.debug({
        props,
        error,
      });

      if (axios.isAxiosError(error) && error.response?.status === 401) {
        showLoginToast();
      } else if (axios.isAxiosError(error) && error.response?.status) {
        showErrorToast(error.response.data);
      } else {
        onError(error, props.onError);
      }
    } finally {
      setLoading(false);
    }

    return null;
  };

  // GET / POST / PUT / DELETE functions

  const get = async (props: SpecificRequestProps) => {
    return await request({
      method: "GET",
      ...props,
    });
  };

  const post = async (props: SpecificRequestProps) => {
    return await request({
      method: "POST",
      ...props,
    });
  };

  const put = async (props: SpecificRequestProps) => {
    return await request({
      method: "PUT",
      ...props,
    });
  };

  const del = async (props: SpecificRequestProps) => {
    return await request({
      method: "DELETE",
      ...props,
    });
  };

  return {
    loading,
    get,
    post,
    put,
    del,
    request,
  };
}

export default useApi;
