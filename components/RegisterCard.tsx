"use client";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { RegisterForm } from "./RegisterForm";

export function RegisterCard() {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/");
  };
  return (
    <Card>
      <CardContent className="sm:w-[425px]">
        <CardHeader>
          <CardTitle className="w-full text-center">Register</CardTitle>
          <CardDescription className="w-full text-center">
            Register using your email and password
          </CardDescription>
        </CardHeader>
        <RegisterForm />
        <CardFooter className="text-sm w-full justify-end p-0 pt-2">
          {"Already have an account?"}
          <Button
            variant={"link"}
            className="p-1 font-bold"
            onClick={handleRegister}
          >
            Login
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
