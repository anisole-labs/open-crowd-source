"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { sacramento } from "@ui/lib/fonts";
import { cn } from "@ui/lib/utils";

type MainNavProps = {
  siteName: string;
};

export function MainNav(props: MainNavProps) {
  const pathname = usePathname();

  const getHref = () => {
    // if path starts with "/app", then return "/app"
    // else return "/"
    return pathname.startsWith("/app") ? "/app" : "/";
  };

  return (
    <div className="mr-4 hidden md:flex">
      <Link href={getHref()} className="mr-6 flex items-center space-x-2">
        <span
          className={cn(
            "hidden font-bold sm:inline-block text-3xl",
            sacramento.className,
          )}
        >
          {props.siteName}
        </span>
      </Link>
    </div>
  );
}
