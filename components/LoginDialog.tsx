" use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserForm } from "./UserForm";

export function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="font-bold rounded-full bg-slate-950 text-white border-2 lg:px"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="w-full text-center">Login</DialogTitle>
          <DialogDescription className="w-full text-center">
            Login using your email and password
          </DialogDescription>
        </DialogHeader>
        <UserForm />
      </DialogContent>
    </Dialog>
  );
}
