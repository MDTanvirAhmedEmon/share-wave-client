import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi2";

const MobileHeader = () => {
  return (
    <div className="flex justify-between mx-4 h-12 items-center ">
      <h1 className="text-3xl font-bold font-mono">ShareWave</h1>
      <div>
      <Link href={"/profile"}>
        <HiOutlineUser className="h-6 w-6 " />
        </Link>
      </div>
    </div>
  );
};

export default MobileHeader;
