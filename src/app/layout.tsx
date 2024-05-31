import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { NextUIProvider } from "@nextui-org/system";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Countdown",
  description: "Countdown website based on our event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dayColor: { [key: number]: string } = {
    0: "from-red-700 via-red-500 to-red-300",
    1: "from-amber-700 via-amber-500 to-amber-300",
    2: "from-pink-700 via-pink-500 to-pink-300",
    3: "from-green-700 via-green-500 to-green-300",
    4: "from-orange-700 via-orange-500 to-orange-300",
    5: "from-indigo-700 via-indigo-500 to-indigo-300",
    6: "from-violet-700 via-violet-500 to-violet-300",
  };
  const day: number = new Date().getDay();
  const dateColor = dayColor[day];

  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          notoSans.variable,
          `bg-gradient-to-t ${dateColor}`
        )}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
