import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionProvider } from "@/components/motion";
import { IntroGate } from "@/components/loader";
import { site } from "@/lib/site";
import "./globals.css";

const title = `${site.name} · ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.tagline,
  openGraph: { type: "website", url: "/", siteName: site.name, title, description: site.tagline },
  twitter: { card: "summary_large_image", title, description: site.tagline },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MotionProvider>
            <IntroGate>
              <SiteHeader />
              <main>{children}</main>
              <SiteFooter />
            </IntroGate>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
