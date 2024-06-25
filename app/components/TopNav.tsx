import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { HomeIcon, RocketIcon, ChatBubbleIcon } from "@radix-ui/react-icons";

const TopNav = () => {
  const items = [{ name: "Home", link: "/", icon: <HomeIcon />}, { name: "Projects", link: "/projects", icon: <RocketIcon /> }, { name: "Contact", link: "/contact", icon:<ChatBubbleIcon />  }];
  return (
    <div>
      <FloatingNav navItems={items} />
    </div>
  );
};

export default TopNav;
