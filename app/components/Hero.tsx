import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Crown from "./ui/profile-crown";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="hsl(var(--secondary))"
        />
        <TextGenerateEffect className="w-1/2" words="Greetings Web Traveler! Welcome to Greg's Portal, where you can find all shards of his services." className="text-sm" />
        <Crown size={200} localSrc="/assets/Mymeme7.png" />
      </div>
    </div>
  );
};
