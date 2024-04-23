"use client";
import Link from "next/link";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
const COLORS_TOP = ["#3d2040", "#3b3573", "#bfbdd6", "#6bd6b8"];
export default function NotFound() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  // const data = await getSiteData(domain)
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid h-screen w-full place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-text-default"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="bg-gradient-to-br from-text-default to-text-50 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          {"404 | Not Found"}
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          {"You're Lost Bud"}
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex text-text-default w-fit items-center rounded-full bg-gray-950/10 px-4 py-2  transition-colors hover:bg-gray-950/50"
        >
          <Link href={"/"} className="flex ">
            Home
            <IconArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </Link>
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}
