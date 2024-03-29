/* eslint-disable react/no-unescaped-entities */

"use client";

import { useSignInMutation } from "@/redux/features/user/userApi";
import { accessToken } from "@/utils/accessToken";
import { Spinner } from "keep-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [signIn, { data,isLoading, isSuccess, error, isError }] =
    useSignInMutation();


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData);
    console.log(formData);
  };

  if (data?.data?.accessToken) {
    accessToken.setAccessToken(data?.data?.accessToken);
    redirect('/')
  }

  return (
    <div className="h-[100vh] bg-slate-100 ">
      <div className="flex justify-center items-center gap-14 h-4/5">
        <div className=" hidden lg:block">
          <div>
            <h1 className="text-5xl font-bold mb-5 text-metal-400">
              Share<span className="text-primary">Wave</span>
            </h1>
            <p className="text-lg">
              Connect with people and share your thoughts and life style.
            </p>
          </div>
        </div>
        <div className="w-full md:w-auto mx-4 md:mx-0">
          <form
            onSubmit={handleSubmit}
            className=" shadow-xl py-20 px-10 rounded-lg bg-white w-full md:w-[400px]"
          >
            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className=" py-3 px-5 bg-primary text-white font-bold text-xl rounded-lg cursor-pointer mt-4"
                type="submit"
                value="Log In"
              />
            </div>
            {isLoading && <Spinner className="my-4" color="gray" size="lg" />}
            {isError && <p className=" text-red-500">Wrong password or email</p>}
            <p className="mt-5">
              Don't have an account?{" "}
              <Link className=" text-blue-400 font-semibold" href={"/sign-up"}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className=" h-1/5"></div>
    </div>
  );
};

export default LogIn;
