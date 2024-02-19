"use client";

import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { UserNav } from "./user-nav";

type SiteHeaderProps = {
  siteName: string;
};

export function SiteHeader(props: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav siteName={props.siteName} />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-8">
            <UserNav />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
