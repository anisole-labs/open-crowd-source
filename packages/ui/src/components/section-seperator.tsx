import { Separator } from "@repo/ui/components/ui/separator";
import { TypographyH1 } from "@repo/ui/components/ui/typography";

type SectionSeperatorProps = {
  sectionHeader: string;
};

export function SectionSeperator(props: SectionSeperatorProps) {
  return (
    <>
      <Separator className="w-80%" />
      <TypographyH1 className="w-full text-center mt-8 mb-8">
        {props.sectionHeader}
      </TypographyH1>
      <Separator className="w-80%" />
    </>
  );
}
