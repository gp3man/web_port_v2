"use client";
import React from "react";
import { motion } from "framer-motion";
import { LaptopMock } from "./ui/laptop-mockup";
import { InnerHero } from "./inner-hero";
export const Hero = ({ className }: { className?: string }) => {
  return (
    <div className="w-full h-screen">
      <LaptopMock>
        <InnerHero />
      </LaptopMock>
    </div>
  );
};
