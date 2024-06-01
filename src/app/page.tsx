"use client";

import Footer from "@/components/Footer";
import { Event } from "../components/event";
import CountdownCard from "@/components/CountdownCard";
import clsx from "clsx";

export default function Home() {
  const dayColor: Array<string> = [
    "from-red-700 via-red-500 to-red-300",
    "from-amber-700 via-amber-500 to-amber-300",
    "from-pink-700 via-pink-500 to-pink-300",
    "from-green-700 via-green-500 to-green-300",
    "from-orange-700 via-orange-500 to-orange-300",
    "from-indigo-700 via-indigo-500 to-indigo-300",
    "from-violet-700 via-violet-500 to-violet-300",
  ];
  const day: number = new Date().getDay();
  const dateColor: string = dayColor[day];

  return (
    <>
      <main
        className={clsx(
          `bg-gradient-to-t ${dateColor}`,
          "flex items-center justify-center min-h-screen py-10 w-full"
        )}
      >
        <div className="flex flex-col items-center justify-center max-w-md space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Countdown
          </h1>
          {Event.map((event, index) => {
            return <CountdownCard key={index} {...event} />;
          })}
        </div>
      </main>
      <div className="pb-2">
        <Footer />
      </div>
    </>
  );
}
