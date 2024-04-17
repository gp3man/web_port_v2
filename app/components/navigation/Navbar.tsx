"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Tony Thyme"
              href="https://tonythyme.com"
              src="/assets/tt-sc.png"
              description="Take the guess work out of creating delicious meals. A Gregcache build."
            />
            <ProductItem
              title="Gregscache V1"
              href="https://gpsworld.netlify.app/"
              src="/assets/gc-sc.png"
              description="It's spiderman pointing at spiderman. Look back at old news while we whip up something fresh."
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
