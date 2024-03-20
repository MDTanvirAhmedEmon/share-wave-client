/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-[100vh] bg-slate-100 ">
      <div className="flex justify-center items-center gap-14 h-4/5">
        <div className="">
          <div>
            <h1 className="text-5xl font-bold mb-5 text-metal-400">
              Share<span className="text-primary">Wave</span>
            </h1>
            <p className="text-lg">Connect with people and share your thoughts and life style.</p>
          </div>
        </div>
        <div className="">
          <form className=" shadow-xl py-20 px-10 rounded-lg bg-white w-[400px]">
            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div>
              <input
                className=" py-3 px-5 bg-primary text-white font-bold text-xl rounded-lg cursor-pointer mt-4"
                type="submit"
                value="Log In"
              />
            </div>
            <p className="mt-5">Don't have an account? <Link className=" text-blue-400 font-semibold" href={'/sign-up'}>Sign up</Link></p>
          </form>
        </div>
      </div>
      <div className=" h-1/5"></div>
    </div>
  );
};

export default page;
