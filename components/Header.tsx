"use client";
import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="inline-flex w-full p-2 lg:px-8 bg-white justify-end items-center gap-2">
      {children}
    </nav>
  );
};

export default Header;
