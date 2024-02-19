"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { CrowdsourceResponseType } from "@repo/api/crowdsource";

import { Button } from "@ui/components/ui/button";
import { Progress } from "@ui/components/ui/progress";
import { Skeleton } from "@ui/components/ui/skeleton";
import {
  TypographyH1,
  TypographyLead,
  TypographyMuted,
  TypographyPBalance,
} from "@ui/components/ui/typography";
import useApi from "@ui/hooks/use-api";

export type HeroSectionProps = {
  title: string;
  titleSupport: string;
  description: string;
};

export const HeroSection = (props: HeroSectionProps) => {
  const api = useApi();
  const [data, setData] = useState<CrowdsourceResponseType | null>(null);

  const onSuccess = (data: any) => {
    console.log(data);
    setData(data);
  };

  const fetchCrowdsourceData = async () => {
    const response = await api.get({
      url: "/api/crowdsource",
      onSuccess,
    });
    console.log(response);
  };

  useEffect(() => {
    fetchCrowdsourceData();
  }, []);

  return (
    <div
      className="
        min-h-screen-app 
        md:h-screen-app 
        flex 
        flex-1 
        flex-col 
        justify-center 
        items-center 
        text-center
      "
    >
      {/* text section */}
      <TypographyH1>{props.title}</TypographyH1>

      <TypographyLead>{props.titleSupport}</TypographyLead>

      <TypographyPBalance className="w-[50%]">
        {props.description}
      </TypographyPBalance>

      {/* crowdfund section */}
      <div className="mt-16 w-[50%]">
        <div className="w-full flex flex-1 flex-row justify-between items-center p-1">
          <TypographyMuted>$ 0</TypographyMuted>
          {data ? (
            <TypographyMuted>
              $ {Math.floor(data.milestone.amountGoal / 100)}
            </TypographyMuted>
          ) : (
            <Skeleton className="w-[40px] h-5" />
          )}
        </div>

        {data ? (
          <Progress
            value={Math.floor(
              (data.amountBacked / data.milestone.amountGoal) * 100,
            )}
          />
        ) : (
          <Skeleton className="w-full h-4" />
        )}

        <div
          className="
            w-full 
            flex 
            flex-1 
            flex-col
            md:flex-row 
            justify-between 
            items-center 
            p-1
            space-y-2
            md:space-y-0
          "
        >
          {data ? (
            <TypographyMuted>
              Deadline: {new Date(data.milestone.date).toLocaleDateString()}
            </TypographyMuted>
          ) : (
            <Skeleton className="w-[40px] h-5" />
          )}
          {data ? (
            <TypographyMuted>
              {Math.floor(
                (data.amountBacked / data.milestone.amountGoal) * 100,
              )}
              % ($ {data.amountBacked / 100}) by {data.numberOfBackers}{" "}
              backer(s)
            </TypographyMuted>
          ) : (
            <Skeleton className="w-[40px] h-5" />
          )}
        </div>

        <Link href="#back-us-up">
          <Button className="mt-4">Back Us Up</Button>
        </Link>
      </div>
    </div>
  );
};
