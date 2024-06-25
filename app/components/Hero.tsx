import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Crown from "./ui/profile-crown";
import { FlipWords } from "./ui/flip-words";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <div className="pb-20 pt-36 h-[100dvh]">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="hsl(var(--secondary))"
        />
        <div className="flex ">
          <div >
            <TextGenerateEffect
              className="w-1/2"
              words="Greetings! I'm Gregory Pounds."
            />
            <FlipWords
              words={["Software-Engineer", "Devops-Engineer", "Photograpgher"]}
              duration={6000}
              className="delay-75"
            />
          </div>
          <Crown size={200} localSrc="/assets/Mymeme7.png" />
        </div>
      </div>
    </div>
  );
};
