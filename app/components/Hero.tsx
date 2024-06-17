"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="var(--secondary-default)"
        />
      </div>
    </div>
  );
};
