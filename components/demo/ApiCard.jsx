"use client";
import { useState } from "react";

export function ApiCard({ runtime }) {
  const [data, setData] = useState("This is a quote");
  const [timeToFetch, setTimeToFetch] = useState(0);
  const [loading, setLoading] = useState(false);

  const title = runtime === "node" ? "Node.js runtime" : "Edge runtime";

  const handleClick = async () => {
    const stopInterval = timer();
    setLoading(true);
    try {
      const res = await fetch(`/api/${runtime}/quote`);
      if (res.ok) {
        const json = await res.json();
        stopInterval();
        setData(json.message);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const timer = () => {
    if (timeToFetch > 0) setTimeToFetch(0);
    const interval = setInterval(() => {
      setTimeToFetch((prev) => prev + 1);
    }, 1);
    return () => {
      clearInterval(interval);
    };
  };

  return (
    <div className="flex flex-col gap-2 first-of-type:border-r">
      <header className="py-2">
        <h3 className="font-bold text-center border-b text-xl mb-2">{title}</h3>
      </header>
      <div className="p-2 space-y-2">
        <button
          onClick={handleClick}
          className="bg-indigo-600 relative block mx-auto text-gray-200 px-4 py-2 active:top-[2px] font-semibold w-fit rounded-md"
        >
          Get random quote
        </button>
        {loading ? <p>Loading quote...</p> : <p>Quote: {data}</p>}
        <p className="font-semibold">
          Timer: <span className="text-gray-600 font-normal">{timeToFetch}ms</span>{" "}
        </p>
      </div>
    </div>
  );
}
