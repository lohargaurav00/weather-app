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
import { LoginForm } from "./LoginForm";

export function LoginCard() {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/register");
  };
  return (
    <Card>
      <CardContent className="sm:w-[425px]">
        <CardHeader>
          <CardTitle className="w-full text-center">Login</CardTitle>
          <CardDescription className="w-full text-center">
            Login using your email and password
          </CardDescription>
        </CardHeader>
        <LoginForm/>
        <CardFooter className="text-sm w-full justify-end p-0 pt-2">
          {"Don't have an account?"}
          <Button
            variant={"link"}
            className="p-1 font-bold"
            onClick={handleRegister}
          >
            Register
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
