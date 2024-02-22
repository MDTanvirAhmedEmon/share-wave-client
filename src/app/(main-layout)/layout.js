import LeftSidebar from "@/components/Shared/LeftSidebar";
import RightSidebar from "@/components/Shared/RightSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="">
      <div className="fixed left-0 top-0 bottom-0 w-80 border-r">
        <LeftSidebar></LeftSidebar>
      </div>

      <div className="absolute left-96">{children}</div>
      <div className="fixed right-0 top-0 bottom-0 border-l w-80">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default layout;
