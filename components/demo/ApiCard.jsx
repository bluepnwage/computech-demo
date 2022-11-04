"use client";
import { useState } from "react";

export function ApiCard({ runtime }) {
  const [data, setData] = useState({ content: "", author: "" });
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
        setData(json);
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
    <div className="flex flex-col gap-2 first-of-type:border-r h-full">
      <header className="py-2">
        <h3 className="font-bold text-center border-b text-xl mb-2">{title}</h3>
      </header>
      <div className="p-2 flex flex-col gap-2 h-full jusitfy-between">
        {loading ? (
          <p>Loading quote...</p>
        ) : (
          <>
            <p className="font-semibold ">
              Quote: <span className="text-gray-600 font-normal">{data.content}</span>
            </p>
            <p className="font-semibold ">
              Author: <span className="text-gray-600 font-normal">{data.author}</span>
            </p>
          </>
        )}
        <p className="font-semibold">
          Timer: <span className="text-gray-600 font-normal">{timeToFetch}ms</span>{" "}
        </p>
        <button
          onClick={handleClick}
          className="bg-indigo-600 relative block mx-auto mt-auto text-gray-50 px-4 py-2 active:top-[2px] font-semibold w-fit rounded-md"
        >
          Get random quote
        </button>
      </div>
    </div>
  );
}
