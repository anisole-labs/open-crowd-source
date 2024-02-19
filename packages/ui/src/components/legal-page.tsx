import {
  TypographyH1,
  TypographyLarge,
  TypographyLead,
  TypographyP,
} from "@ui/components/ui/typography";

type TlegalPageContent = {
  title: string;
  content: string;
};

export type LegalPageProps = {
  title: string;
  description: string;
  legalContent: TlegalPageContent[];
  footer: string;
};

export const LegalPage = (props: LegalPageProps) => {
  return (
    <div
      className="
        min-h-screen-app 
        flex 
        flex-1 
        flex-col 
      "
    >
      <TypographyH1 className="mt-16">{props.title}</TypographyH1>

      <TypographyLead className="mt-8 mb-16">
        {props.description}
      </TypographyLead>

      {props.legalContent.map((content, index) => (
        <div key={index} className="mb-10">
          <TypographyLarge>{content.title}</TypographyLarge>
          <TypographyP className="text-muted-foreground mt-0">
            {content.content}
          </TypographyP>
        </div>
      ))}

      <TypographyLead className="mt-16 h-full font-semibold">
        {props.footer}
      </TypographyLead>
    </div>
  );
};
