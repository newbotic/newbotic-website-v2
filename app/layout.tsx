import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import GoogleAnalyticsTracker from './components/GoogleAnalyticsTracker'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newbotic - Digital Presence for Local Businesses",
  description: "Website Audit + Web Page Creation for local businesses. 50% OFF limited offer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleAnalyticsTracker />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
