"use client"
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineCog8Tooth,
  HiOutlineBell,
} from "react-icons/hi2";
import { GoPlusCircle } from "react-icons/go";
import Link from "next/link";
import { useState } from "react";
import { PostModal } from "../Post/PostModal";

const MobileFooter = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
    <div className=" flex justify-between h-14 items-center fixed bottom-0 left-0 right-0 px-4 border-t bg-white">
      <Link href={"/"}>
        <HiOutlineHome className="h-8 w-8" />
      </Link>
      <HiOutlineBell ottomCenter className="h-8 w-8" />
      <GoPlusCircle onClick={onOpenModal} className="h-8 w-8" />
      <HiOutlineChatBubbleLeftRight className="h-8 w-8" />
      <HiOutlineCog8Tooth ottomCenter className="h-8 w-8" />

    </div>
    <PostModal open={open} onCloseModal={onCloseModal}></PostModal>
    </>
  );
};

export default MobileFooter;
