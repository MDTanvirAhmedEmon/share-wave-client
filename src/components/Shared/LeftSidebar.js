"use client";
import { Sidebar } from "keep-react";
import { SignIn } from "phosphor-react";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlinePhoto,
  HiOutlineHome,
  HiOutlineCog8Tooth,
  HiOutlineBell,
} from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";

const LeftSidebar = () => {
  return (
    <div>
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.ItemGroup>
          <div>
            <h1 className=" ml-2 text-3xl font-bold mb-5 text-metal-400">Share<span className="text-primary">Wave</span></h1>
          </div>

          <Sidebar.Item href="#" icon={<HiOutlineHome className="h-6 w-6" />}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<HiOutlineUser className="h-6 w-6 " />}>
            Profile
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<HiOutlineBell ottomCenter className="h-6 w-6" />}>
            Notification
          </Sidebar.Item>

          <Sidebar.Item
            href="#"
            icon={<HiOutlinePhoto className="h-6 w-6" />}
            labelColor="gray"
          >
            Feeds
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={<HiOutlineChatBubbleLeftRight className="h-6 w-6" />}
          >
            Message
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={<HiOutlineCog8Tooth ottomCenter className="h-6 w-6" />}
          >
            Setting
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<SignIn size={24} />}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar>
    </div>
  );
};

export default LeftSidebar;
