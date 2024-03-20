"use client";

import Link from "next/link";

const page = () => {
  return (
    <div className="h-[100vh] bg-slate-100 ">
      <div className="flex justify-center items-center gap-14 h-[90%]">
        <div className="">
          <form className=" shadow-xl p-10 rounded-lg bg-white w-[400px]">
            <h1 className="text-4xl font-bold mb-5 text-metal-400 text-center">
              Share<span className="text-primary">Wave</span>
            </h1>
            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
            </div>

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="email"
                name="email"
                placeholder="Email Address"
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

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="text"
                name="gender"
                placeholder="Gender"
              />
            </div>

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="date"
                name="date"
                placeholder="Date"
              />
            </div>

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="text"
                name="address"
                placeholder="Address"
              />
            </div>
            <div>
              <input
                className=" py-3 px-5 bg-primary text-white font-bold text-xl rounded-lg cursor-pointer mt-4"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p className="mt-5">
              Have an account?{" "}
              <Link className=" text-blue-400 font-semibold" href={"/log-in"}>
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default page;
