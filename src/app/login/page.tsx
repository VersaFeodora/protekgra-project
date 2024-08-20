import React from "react";
import Link from "next/link";
import Image from "next/image";
import Signin from "@/components2/organisms/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LAMS Login Page",
  description: "Lecturer Attendance Monitoring System Login Page",
};

const SignIn = () => {
    return (
      <div className="justify-center bg-violet-100">
        <div className="rounded-[10px] shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="p-5 rounded m-5">
            <div className="flex flex-wrap justify-center">
                <div className="bg-white w-full xl:w-3/5 rounded overflow-hidden shadow-lg">
                <div className="w-full p-4 sm:p-12.5 xl:p-15 justify-center">
                    <div className="flex flex-row justify-center">
                      <Image
                        src="/images/logo/jti-polinema.png"
                        width={40}
                        height={40}
                        alt=""
                        className="m-3"
                      />
                      <Image
                        src="/images/logo/polinema.png"
                        width={40}
                        height={40}
                        alt=""
                        className="m-3"
                      />
                    </div>
                    <h1 className="text-fuchsia-700 text-center mb-0.5 text-heading-5 font-bold text-dark dark:text-white">
                        Lecturer Attendance Monitoring System
                    </h1>
                    <Signin />
                </div>
                </div>
            </div>
            <div className="p-3 text-center">
                <p>Copyright 2024; Created by Group 3 3I-TI</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignIn;
  