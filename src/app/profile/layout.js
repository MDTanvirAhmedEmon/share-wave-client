import LeftSidebar from "@/components/Shared/LeftSidebar";
import MobileFooter from "@/components/Shared/MobileFooter";
import MobileHeader from "@/components/Shared/MobileHeader";
import PrivateRoutes from "@/libs/privateRoutes";

const layout = ({ children }) => {
  return (
    <PrivateRoutes>
      <div className="flex">
        <div className=" w-0 md:w-[30%] lg:w-[20%]">
          <div className="fixed left-0 top-0 bottom-0 w-auto 2xl:w-80 border-r hidden md:block ">
            <LeftSidebar></LeftSidebar>
          </div>
        </div>

        {/* Mobile footer */}
        <div className="md:hidden">
          <MobileFooter></MobileFooter>
        </div>
        {/* Mobile footer end */}

        {/* Main Body Content */}
        <div className=" w-full md:w-[70%] lg:w-[80%]">
          <div className="mt-12 md:mt-0 w-auto mx-3 md:w-[90%] lg:mx-auto  ">
            {children}
          </div>
        </div>

        {/* Main Body Content end */}

        {/* Mobile header */}
        <div className="fixed right-0 top-0 left-0 border-b md:hidden bg-white">
          <MobileHeader></MobileHeader>
        </div>
      </div>
    </PrivateRoutes>
  );
};

export default layout;
