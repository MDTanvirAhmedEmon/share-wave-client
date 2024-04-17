"use client";
import Link from "next/link";
import { useState } from "react";

const SuggestedUser = ({ user }) => {
  const { firstName, lastName, profileImageUrl, createdAt, _id } = user;

  // const { follow, setFollow } = useState(false);

  const profileImage = {
    backgroundImage: `URL(${profileImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex items-center gap-4 mb-6">
      <div
        className=" w-[50px] h-[50px] rounded-full ring-white shadow"
        style={profileImage}
      ></div>
      <div>
        <Link href={`/user-profile/${_id}`}>
          <p className=" font-semibold text-sm">
            {firstName} {lastName}
          </p>
        </Link>
        <p className="  text-sm">
          {months[new Date(createdAt).getMonth()]}{" "}
          {new Date(createdAt).getDate()}
        </p>
      </div>
      <div>
        <p className="bg-primary hover:bg-[#6328a7] text-white px-2 rounded-lg cursor-pointer">
          follow
        </p>
      </div>
    </div>
  );
};

export default SuggestedUser;
