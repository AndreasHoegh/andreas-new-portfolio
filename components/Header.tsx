"use client";
import Link from "next/link";
import Nav from "./Nav";

import React from "react";

function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}{" "}
        <Link href={"/"}>
          <h1 className="hidden text-4xl font-semibold md:block">
            AH <span className="text-[#0000FF]">DEV</span>
          </h1>
        </Link>
        <div className="flex items-center gap-8">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
