"use client"
import React from "react";
import { LoginDialog } from "./LoginDialog";

const Header = () => {
  return <nav className="inline-flex w-full p-2 lg:px-8 bg-slate-950  justify-end items-center ">
      <LoginDialog />
  </nav>;
};

export default Header;
