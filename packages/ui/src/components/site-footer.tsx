import Link from "next/link";

type Page = {
  title: string;
  url: string;
};

export type SiteFooterProps = {
  creators: string[];
  creatorSocials: string[];
  pages?: Page[];
};

export function SiteFooter(props: SiteFooterProps) {
  const GetPages = () => {
    if (!props.pages) return <></>;

    return (
      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
        {props.pages.map((page) => (
          <Link
            key={page.url}
            href={page.url}
            className="text-sm font-medium text-muted-foreground hover:underline"
          >
            {page.title}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Made with ❤️ by{" "}
          {props.creators?.map((creator, index) => (
            <span key={index}>
              <a
                href={props.creatorSocials[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:underline"
              >
                {creator}
              </a>
              {index < props.creators.length - 2 ? ", " : ""}
              {index === props.creators.length - 2 ? " and " : ""}
            </span>
          ))}
        </p>
        <GetPages />
      </div>
    </footer>
  );
}
