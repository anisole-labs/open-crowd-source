import {
  DocsSidebarNav,
  DocsSidebarNavProps,
} from "@ui/components/sidebar-nav";
import { ScrollArea } from "@ui/components/ui/scroll-area";
import { CustomMdxProvider } from "@ui/providers/mdx-provider";

export interface DocsLayoutProps {
  children: React.ReactNode;
}

export function getDocsLayout(sidebarItems: DocsSidebarNavProps) {
  return (props: DocsLayoutProps) => {
    return (
      <div className="border-b">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <ScrollArea className="h-full py-6 pr-6 lg:py-8">
              <DocsSidebarNav {...sidebarItems} />
            </ScrollArea>
          </aside>
          <div className="py-6">
            <CustomMdxProvider>{props.children}</CustomMdxProvider>
          </div>
        </div>
      </div>
    );
  };
}
