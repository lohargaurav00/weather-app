" use client";
import { useSelector, useDispatch } from "react-redux";

import type { RootState, AppDispatch } from "@/store/store";
import {
  handleIsLoginOrSignup,
  openCloseSignupModal,
} from "@/slices/modalSlice";

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

export function SignupDialog() {
  const { openSignupModal, isLoginOrSignup } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Dialog
      open={openSignupModal}
      onOpenChange={() => {
        dispatch(openCloseSignupModal());
        if (!isLoginOrSignup) dispatch(handleIsLoginOrSignup());
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="font-bold rounded-full bg-slate-950 text-white border-2 lg:px"
        >
          SignUp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="w-full text-center">Sign-Up</DialogTitle>
          <DialogDescription className="w-full text-center">
            Sign-Up using your email and password
          </DialogDescription>
        </DialogHeader>
        <UserForm />
      </DialogContent>
    </Dialog>
  );
}
