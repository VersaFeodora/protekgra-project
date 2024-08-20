"use client";
import Link from "next/link";
import React from "react";
import SigninWithPassword from "@/components2/molecules/SigninWithPassword";

export default function Signin() {
  return (
    <>
      <div className="my-6 flex items-center justify-center">
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
        <div className="block w-full min-w-fit bg-white px-3 text-center font-medium dark:bg-gray-dark">
          Log into your account
        </div>
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
      </div>

      <div>
        <SigninWithPassword />
      </div>

      <div className="mt-6 text-center">
        <p>
          Don’t have any account?{" "}
          <Link href="/register" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
