"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
export const UConstruct = ({ className }: { className?: string }) => {
  return (
    <div className="w-full bg-black">
      <LampContainer>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delayChildren: 1,
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          V 2 <br />{" "}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease:"circInOut", duration: 3 }}
          >
            Coming Soon{" "}
          </motion.span>
        </motion.p>
      </LampContainer>
    </div>
  );
};
