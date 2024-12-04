"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className=" flex flex-col items-center bg-stone-100 min-h-screen">
      <h1 className="text-4xl text-center text-black my-10 sm:my-16">
        Welcome to my <span className="text-[#0000FF]">personal website</span>
      </h1>
      {/* Roterende cirkel */}
      <motion.svg
        className="w-[300px] h-[300px]"
        fill="transparent"
        viewBox="0 0 506 506"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#0000FF"
          strokeWidth={6}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>
    </section>
  );
}
