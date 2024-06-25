import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Crown from "./ui/profile-crown";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <div className="pb-20 pt-14 top-0 h-[100dvh]">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-[100dvh]"
          fill="hsl(var(--secondary))"
        />
      <div>
        <div className="flex ">
          <div className="w-2/3">
            <TextGenerateEffect
              className="w-full"
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
      <div className="flex items-center space-x-5 relative -bottom-12">
        <Button variant={"secondary"} size={"lg"}>See More</Button>
        <Button variant={"outline"} size={"lg"}>Contact</Button>
      </div>
    </div>
  );
};
