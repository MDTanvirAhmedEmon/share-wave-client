"use client";

import { Sidebar } from "keep-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignIn } from "phosphor-react";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineCog8Tooth,
  HiOutlineBell,
} from "react-icons/hi2";
import { GoPlusCircle } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi2";
import { accessToken } from "@/utils/accessToken";
import { PostModal } from "../Post/PostModal";
import { useState } from "react";

const LeftSidebar = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return (
    <div>
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.ItemGroup>
          <div>
            <h1 className=" ml-2 text-3xl font-bold mb-5 text-metal-400">
              Share<span className="text-primary">Wave</span>
            </h1>
          </div>
          <Link href={"/"}>
            <Sidebar.Item
              className="mb-4"
              icon={<HiOutlineHome className="h-6 w-6 " />}
            >
              Home
            </Sidebar.Item>
          </Link>

          <Link href={"/profile"}>
            <Sidebar.Item
              className="mb-4"
              icon={<HiOutlineUser className="h-6 w-6  " />}
            >
              Profile
            </Sidebar.Item>
          </Link>

          <Link href={"#"}>
            <Sidebar.Item
              className="mb-4"
              icon={<HiOutlineBell ottomCenter className="h-6 w-6 " />}
            >
              Notification
            </Sidebar.Item>
          </Link>
          <Link href={"#"}>
            <Sidebar.Item
              className="mb-4"
              href="#"
              icon={<GoPlusCircle className="h-6 w-6 " />}
              labelColor="gray"
              onClick={onOpenModal}
            >
              Create Wave
            </Sidebar.Item>
          </Link>
          <Link href={"/message"}>
            <Sidebar.Item
              className="mb-4"
              href="#"
              icon={<HiOutlineChatBubbleLeftRight className="h-6 w-6 " />}
            >
              Message
            </Sidebar.Item>
          </Link>
          <Link href={"#"}>
            <Sidebar.Item
              className="mb-4"
              href="#"
              icon={<HiOutlineCog8Tooth ottomCenter className="h-6 w-6 " />}
            >
              Setting
            </Sidebar.Item>
          </Link>

          <Sidebar.Item
            className="mb-4 cursor-pointer"
            onClick={() => {
              accessToken.removeAccessToken(), router.push("/log-in");
            }}
            icon={<SignIn size={24} />}
          >
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar>
      <PostModal open={open} onCloseModal={onCloseModal}></PostModal>
    </div>
  );
};

export default LeftSidebar;
