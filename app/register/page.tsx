import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/authOptions";
import { RegisterCard } from "@/components/RegisterCard";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session ){
    redirect("/dashboard");
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-200">
      <RegisterCard/>
    </div>
  );
};

export default page;
