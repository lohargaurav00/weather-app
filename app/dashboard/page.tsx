"use client";
import React from "react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-200">
      dashboard
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default page;
