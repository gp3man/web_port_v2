import Link from "next/link";
import React from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

const LinkSideBar = () => {
  return (
    <div className="linkSidebar flex flex-col sticky top-1/2 m-0 py-2 rounded-md opacity-30 w-7 z-50 shadow-[0_20px_50px_hsl(var(--primary))] hover:opacity-100">
      <Link className="pl-1 py-1" href={"https://www.upwork.com/freelancers/~01fc1bda02cbdf8865"} target="new">
        <PersonIcon />
      </Link>
      <Link className="pl-1 py-1" href={"https://github.com/gp3man"} target="new">
        <GitHubLogoIcon />
      </Link>
      <Link className="pl-1 py-1" href={"https://www.linkedin.com/in/gregory-pounds/"} target="new">
        <LinkedInLogoIcon />
      </Link>
    </div>
  );
};

export default LinkSideBar;
