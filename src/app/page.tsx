import Footer from "@/components/Footer";
import { Event } from "../components/event";
import CountdownCard from "@/components/CountdownCard";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen py-10 w-full">
        <div className="flex flex-col items-center justify-center max-w-md space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Countdown
          </h1>
          {Event.map((event, index) => {
            return <CountdownCard key={index} {...event} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
