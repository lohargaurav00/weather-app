"use client";
import { useSelector, useDispatch } from "react-redux";

import type { RootState, AppDispatch } from "@/store/store";
import {
  handleIsLoginOrSignup,
  openCloseLoginModal,
  openCloseSignupModal,
} from "@/slices/modalSlice";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserForm } from "./UserForm";

export function LoginDialog() {
  const { openLoginModal, isLoginOrSignup } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Dialog
      open={openLoginModal}
      onOpenChange={() => {
        dispatch(openCloseLoginModal());
        if (isLoginOrSignup) dispatch(handleIsLoginOrSignup());
      }}
    >
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
        <DialogFooter className="text-sm ">
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(openCloseLoginModal());
              dispatch(handleIsLoginOrSignup());
              dispatch(openCloseSignupModal());
            }}
          >
            {"Don't have an account? SignUp here"}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
