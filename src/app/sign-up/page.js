"use client"

import { useSignUpMutation } from "@/redux/features/user/userApi";
import { Spinner } from "keep-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [signUp, { data, isLoading, isError, isSuccess }] = useSignUpMutation();
  console.log(isLoading)
  console.log(data?.data?.accessToken)
  console.log(isSuccess)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    dateOfBirth: new Date().toISOString(),
    address: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);

    const { name, value } = e.target;
    if (name === "dateOfBirth") {
      setFormData({
        ...formData,
        [name]: new Date(value).toISOString(),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signUp(formData);

  };
  if(isSuccess){
    router.push('/');
  }
  return (
    <div className="h-[100vh] bg-slate-100 ">
      <div className="flex justify-center items-center gap-14 h-full md:h-[90%] ">
        <div className="w-full md:w-auto m-5 md:m-0">
          <form
            onSubmit={handleSubmit}
            className=" shadow-xl p-7 md:p-10 rounded-lg bg-white w-full md:w-[400px] "
          >
            <h1 className="text-4xl font-bold mb-5 text-metal-400 text-center">
              Share<span className="text-primary">Wave</span>
            </h1>
            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="email"
                name="email"
                placeholder="Email Address"
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

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="phone"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="text"
                name="gender"
                placeholder="Gender"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="date"
                name="dateOfBirth"
                placeholder="Date Of Birth"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <input
                className="border p-2 rounded-md w-full"
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className=" py-3 px-5 bg-primary text-white font-bold text-xl rounded-lg cursor-pointer mt-4"
                type="submit"
                value="Sign Up"
              />
            </div>
            {isLoading && <Spinner className="my-4" color="gray" size="lg" />}
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

export default SignUp;
