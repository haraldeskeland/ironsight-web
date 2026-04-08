import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const lilita = localFont({
  src: "../fonts/LilitaOne-Regular.ttf",
  variable: "--font-lilita",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ironsight — Tower Defense Action Shooter",
  description:
    "Defend your base. Arm your towers. Unleash hell. Run, gun, and build defenses in real time. Free on the App Store.",
  openGraph: {
    title: "Ironsight — Tower Defense Action Shooter",
    description:
      "Defend your base. Arm your towers. Unleash hell. Free on the App Store.",
    images: ["/logo.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lilita.variable} ${inter.variable}`}>
      <body className="bg-bg text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
