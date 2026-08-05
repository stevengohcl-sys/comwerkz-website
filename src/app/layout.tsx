import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Comwerkz Technology | IT Services Singapore",
    template: "%s | Comwerkz Technology"
  },
  description:
    "Singapore IT services for enterprise networks, AI consulting, smart security, energy solutions and autonomous robotics.",
  keywords: [
    "IT Services Singapore",
    "Structured Cabling Singapore",
    "AI Consulting Singapore",
    "Access Control Singapore",
    "CCTV Singapore",
    "EV Charger Singapore",
    "Solar Panel Singapore",
    "Network Infrastructure Singapore"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Comwerkz Technology | Technology that keeps your business moving",
    description: "Integrated network infrastructure, AI automation, security, energy and robotics solutions in Singapore.",
    type: "website",
    url: "/",
    siteName: "Comwerkz Technology P.L.",
    images: [{ url: "/images/comwerkz-network-engineer.png", width: 1536, height: 1024, alt: "Network engineer working in a commercial building" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Comwerkz Technology | IT Services Singapore",
    description: "Network, AI, security, energy and robotics solutions for Singapore businesses.",
    images: ["/images/comwerkz-network-engineer.png"]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#00152e"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-SG">
      <body>{children}</body>
    </html>
  );
}
