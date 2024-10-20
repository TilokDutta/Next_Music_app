"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our_Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/allCourses">All Courses</HoveredLink>
            <HoveredLink href="/NewCourses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/upcomingCourses">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/upcomingCourses">Music production</HoveredLink>
            <HoveredLink href="/upcomingCourses">SongWriting</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contact_Us">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact_Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
