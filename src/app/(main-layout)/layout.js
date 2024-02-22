import LeftSidebar from "@/components/Shared/LeftSidebar";
import MobileFooter from "@/components/Shared/MobileFooter";
import MobileHeader from "@/components/Shared/MobileHeader";
import RightSidebar from "@/components/Shared/RightSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="">
      <div className="fixed left-0 top-0 bottom-0 w-auto 2xl:w-80 border-r hidden md:block ">
        <LeftSidebar></LeftSidebar>
      </div>

      {/* Mobile footer */}
      <div className="md:hidden">
        <MobileFooter></MobileFooter>
      </div>
      {/* Mobile footer end */}

      {/* Main Body Content */}
      <div className="mt-12 md:mt-0 w-auto mx-3 md:w-[500px] lg-[600px] xl:w-[700px] md:ml-[250px] lg:mx-auto bg-slate-300 ">
        {children}
      </div>
      {/* Main Body Content end */}

      <div className="fixed right-0 top-0 bottom-0 border-l w-60 2xl:w-auto hidden lg:block">
        <RightSidebar></RightSidebar>
      </div>

      {/* Mobile header */}
      <div className="fixed right-0 top-0 left-0 border-b md:hidden bg-white">
        <MobileHeader></MobileHeader>
      </div>
    </div>
  );
};

export default layout;
