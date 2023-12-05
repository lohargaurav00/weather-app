"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { TiWeatherStormy } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

import { Button } from "./ui/button";
import SearchDialog from "./SearchDialog";
import Link from "next/link";

const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <nav className="inline-flex w-full p-2 lg:px-8 bg-white justify-end items-center gap-2">
      <div className="flex-1 hidden md:inline-flex">
        <TiWeatherStormy className="text-4xl text-primary font-bold" />
        <h1 className="text-2xl font-bold text-left text-primary">
          Weather App
        </h1>
      </div>
      <div className="w-full md:w-[280px]">
        <SearchDialog />
      </div>

      <Button onClick={() => signOut()}>Log out</Button>
      <Link href={"https://www.github.com"} target="_blank" rel="noreferrer">
        <FaGithub className="text-4xl text-primary cursor-pointer hover:opacity-90 active:scale-105" />
      </Link>
      {children}
    </nav>
  );
};

export default Header;
