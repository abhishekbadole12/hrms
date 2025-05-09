"use client";

import React, { useActionState } from "react";
//
import Button from "@/components/custom/button";
import Input from "@/components/custom/input";
//
import HorizontalLine from "./horizontal-line";
import SocialIconContainer from "./social-icon-container";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
//
import { loginUser } from "@/app/actions/auth";

// import BackgroundGradient from "./background-gradient";

export default function LoginContainer() {
  const [state, action, isPending] = useActionState(loginUser, null);

  return (
    <div className="w-full rounded-2xl p-8 bg-white relative">
      <div className="my-8" />

      {/* <BackgroundGradient/> */}

      {/* Company Logo */}
      <div className="w-full border-slate-200 py-3">
        <h1 className="text-xl font-bold text-center text-gray-300">
          {"<"}COMPANY LOGO{">"}
        </h1>
      </div>

      <p className="text-4xl font-semibold text-gray-800 text-center mb-3">
        Welcome back
      </p>
      <p className="text-sm font-medium text-gray-600 text-center mb-5">
        Please enter your details to sign in
      </p>

      <SocialIconContainer />

      <HorizontalLine />

      <form action={action}>
        <Input
          label="Your Email Address"
          id="email"
          name="email"
          type="email"
          placeholder="Your Email Address"
          className="mb-3.5 text-zinc-800 font-medium"
          Icon={<FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />}
          errorMsg={state?.errors?.email}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="mb-5 text-zinc-800 font-medium"
          Icon={<FontAwesomeIcon icon={faLock} className="text-gray-400" />}
          errorMsg={state?.errors?.password || state?.message}
        />

        <div className="flex justify-between items-center mb-6">
          {/* Remember me checkbox */}
          <div className="flex justify-between items-center">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 cursor-pointer"
              // onChange={handleChanges}
            />
            <span className="text-sm font-medium text-gray-700">
              Remember me
            </span>
          </div>

          <a href="#" className="text-sm font-semibold text-gray-700 underline">
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full py-3 bg-zinc-800 hover:bg-zinc-700"
        >
          Login
        </Button>
      </form>

      <div className="flex justify-center items-center mt-5">
        <span className="text-sm text-gray-700">Don't have an account?</span>
        <a
          href="#"
          className="text-sm font-semibold text-gray-700 underline ml-1"
        >
          Sign up
        </a>
      </div>
    </div>
  );
}
