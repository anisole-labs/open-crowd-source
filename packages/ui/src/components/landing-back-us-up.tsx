import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/components/ui/carousel";
import { TypographyH2, TypographyPBalance } from "@ui/components/ui/typography";
import { cn } from "@ui/lib/utils";

import {
  ProductCard,
  ProductCardsProps,
} from "./landing-page-back-us-up-products";

export type LandingBackUsUpProps = {
  id: string;
  title: string;
  description: string;
  products: ProductCardsProps[];
  layoutReversed?: boolean;
  className?: string;
};

export const LandingBackUsUp = (props: LandingBackUsUpProps) => {
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
        props.layoutReversed ? "flex-row-reverse" : "",
        props.className,
      )}
    >
      <div
        className="
          flex
          flex-1
          flex-col
          items-center
          md:pr-12
        "
      >
        {/* text section */}
        <TypographyH2>{props.title}</TypographyH2>

        <TypographyPBalance className="text-center">
          {props.description}
        </TypographyPBalance>
      </div>

      <Carousel
        className="max-w-[70%] md:max-w-[50%] pt-6"
        opts={{
          loop: true,
        }}
      >
        <CarouselPrevious />
        <CarouselContent>
          {props.products.map((product, index) => {
            return (
              <CarouselItem key={index}>
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  content={product.content}
                  buttonLink={product.buttonLink}
                  buttonText={product.buttonText}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
};
