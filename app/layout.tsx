import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "newblog | ddd",
    template: "%s | newblog"
  },
  description: "A playful, creative blog for making a difference. Stories, ideas, and inspiration for positive change.",
  keywords: ["blog", "creative", "community", "positive change", "donate", "stories", "inspiration"],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#14b8a6"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400;500;700&family=Merriweather:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
