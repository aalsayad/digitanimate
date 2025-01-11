"use client";

import { useState } from "react";
import AnimatedDigit from "./components/AnimatedDigit";

export default function Home() {
  const [number, setNumber] = useState<string>("0000");

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    setNumber(newNumber);
    console.log(newNumber);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-3xl font-light tracking-wider">
        Random Number Generator
      </h1>

      <div className="flex justify-center">
        {number.split("").map((digit, index) => (
          <AnimatedDigit key={index} digit={parseInt(digit)} />
        ))}
      </div>

      <button
        onClick={generateNumber}
        className="px-6 py-3 text-background bg-foreground rounded-lg z-10"
      >
        Generate Number
      </button>
    </main>
  );
}
