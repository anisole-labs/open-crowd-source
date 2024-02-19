import "@repo/ui/globals.css";
import { Metadata, Viewport } from "next";
import Script from "next/script";

import { Analytics } from "@repo/ui/components/analytics";
import { AuthProvider } from "@repo/ui/components/auth-provider";
import { SiteFooter, SiteFooterProps } from "@repo/ui/components/site-footer";
import { SiteHeader } from "@repo/ui/components/site-header/index";
import { TailwindIndicator } from "@repo/ui/components/tailwind-indicator";
import { ThemeProvider } from "@repo/ui/components/theme-provider";
import { ThemeSwitcher } from "@repo/ui/components/theme-switcher";
import { Toaster as NewYorkToaster } from "@repo/ui/components/ui/toaster";
import { fontSans } from "@repo/ui/lib/fonts";
import { cn } from "@repo/ui/lib/utils";

import { siteConfig } from "@open-crowd-source/config/site";
import { getServerAuthSession } from "@open-crowd-source/lib/auth";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = siteConfig.metadata;

interface RootLayoutProps {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerAuthSession();
  const footerPages: SiteFooterProps = {
    pages: [
      {
        title: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        title: "Terms of Service",
        url: "/terms-of-service",
      },
      {
        title: "Refund Policy",
        url: "/refund-policy",
      },
    ],
  };

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head></head>
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider session={session ? session : undefined}>
              <SiteHeader siteName={siteConfig.name} />
              <div className="container min-h-screen-app">{children}</div>
              <SiteFooter {...footerPages} />
              <TailwindIndicator />
            </AuthProvider>
          </ThemeProvider>
          <Analytics />
          <ThemeSwitcher />
          <NewYorkToaster />
        </body>
      </html>
    </>
  );
}
