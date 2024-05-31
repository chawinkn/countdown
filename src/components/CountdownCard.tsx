"use client";

import { useState, useEffect } from "react";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

type countdownProps = {
  title: string;
  date: string;
  url: string;
  pic: string;
};

export default function CountdownCard(props: countdownProps) {
  const [targetDate, setTargetDate] = useState(new Date(props.date));
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Card
      className="backdrop-blur-sm bg-white/30 p-5 glass-border w-[350px] sm:w-[450px] md:w-[600px]"
      shadow="md"
    >
      <CardBody className="text-center space-y-6">
        {props.pic.length && props.url.length ? (
          <div className="flex justify-center items-center">
            <Link href={props.url} target="_blank">
              <Image alt={props.pic} src={props.pic} width={400} height={400} />
            </Link>
          </div>
        ) : (
          <></>
        )}
        <h2 className="text-3xl md:text-5xl font-extrabold">{props.title}</h2>
        <div className="flex justify-center items-center space-x-4">
          <div>
            <div className="bg-white/50 px-2 py-3 md:px-4 md:py-4 rounded-lg text-xl md:text-3xl font-bold">
              {timeRemaining.days}
            </div>
            <div className="text-white mt-2 font-medium">Days</div>
          </div>
          <div>
            <div className="bg-white/50 px-2 py-3 md:px-4 md:py-4 rounded-lg text-xl md:text-3xl font-bold">
              {timeRemaining.hours}
            </div>
            <div className="text-white mt-2 font-medium">Hours</div>
          </div>
          <div>
            <div className="bg-white/50 px-2 py-3 md:px-4 md:py-4 rounded-lg text-xl md:text-3xl font-bold">
              {timeRemaining.minutes}
            </div>
            <div className="text-white mt-2 font-medium">Minutes</div>
          </div>
          <div>
            <div className="bg-white/50 px-2 py-3 md:px-4 md:py-4 rounded-lg text-xl md:text-3xl font-bold">
              {timeRemaining.seconds}
            </div>
            <div className="text-white mt-2 font-medium">Seconds</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
