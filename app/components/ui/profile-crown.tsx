"client";
import Image from "next/image";
import React from "react";

const Crown = ({
  className,
  localSrc,
  size,
}: {
  className?: string;
  localSrc: string;
  size: number;
}) => {
  return (
    <div className="realative ">
      <div className="relative ">
        
        <div className="crown ">

        </div>
      </div>
      <Image src={localSrc} height={size} width={size} alt={localSrc} />
    </div>
  );
};

export default Crown;
