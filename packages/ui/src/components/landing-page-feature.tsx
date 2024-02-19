import Image from "next/image";

import { TypographyH2, TypographyPBalance } from "@ui/components/ui/typography";
import { cn } from "@ui/lib/utils";

export type LandingFeatureProps = {
  id: string;
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  imageAlt: string;
  layoutReversed?: boolean;
  className?: string;
  imageHeight?: number;
  imageWidth?: number;
};

export const LandingFeature = (props: LandingFeatureProps) => {
  return (
    <div
      id={props.id}
      className={cn(
        `
          min-h-screen-app
          flex 
          flex-1
          flex-col 
          md:flex-row 
          justify-around
          items-center 
          pt-12
          md:pt-0
        `,
        props.layoutReversed ? "md:flex-row-reverse" : "",
        props.className,
      )}
    >
      <div
        className="
          flex
          flex-1
          flex-col
          items-center
        "
      >
        {/* text section */}
        <TypographyH2>{props.title}</TypographyH2>

        <TypographyPBalance className="text-center">
          {props.description}
        </TypographyPBalance>
      </div>

      <div
        className="
          flex
          flex-1
          flex-col
          items-center
        "
      >
        {/* todo: embed image here */}
        <div className="dark:hidden w-full h-full">
          <Image
            src={props.imageLight}
            width={props.imageWidth || 600}
            height={props.imageHeight || 600}
            alt={props.imageAlt}
          />
        </div>

        <div className="hidden dark:block">
          <Image
            src={props.imageDark}
            width={props.imageWidth || 600}
            height={props.imageHeight || 600}
            alt={props.imageAlt}
          />
        </div>
      </div>
    </div>
  );
};
