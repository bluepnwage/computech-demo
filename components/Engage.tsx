"use client";

import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export function Engage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className=" h-96 flex mb-20 overflow-hidden relative items-center justify-center">
      <header className="my">
        <h2 className="text-gray-200 font-bold text-3xl md:text-4xl text-center">
          Computech is engaged in helping to build better communities.
        </h2>
      </header>
      <motion.div aria-hidden ref={ref} className="absolute bg-black -z-10 top-0 left-0 w-full h-full scale-[1.45]">
        <motion.img
          style={{ y }}
          decoding={"async"}
          loading={"lazy"}
          src={"/world-image.jpg"}
          alt={""}
          height={"100%"}
          className="w-full h-full opacity-50 duration-700 ease-out"
        />
      </motion.div>
    </section>
  );
}
