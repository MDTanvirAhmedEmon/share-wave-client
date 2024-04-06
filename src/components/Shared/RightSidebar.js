import profile from "../../../public/profile.jpg";

const RightSidebar = () => {
  const profileImage = {
    backgroundImage: `URL(${profile.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="px-8 pt-6">
      <p className="font-bold text-lg mb-4">Suggested for you</p>
      <div className="flex items-center gap-4 mb-6">
        <div
          className=" w-[50px] h-[50px] rounded-full ring-white shadow"
          style={profileImage}
        ></div>
        <div>
          <p className=" font-semibold text-sm">Tanvir Ahmed Emon</p>
          <p className="  text-sm">December 21</p>
        </div>
        <div>
          <p className="bg-primary hover:bg-[#6328a7] text-white px-2 rounded-lg cursor-pointer">
            follow
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div
          className=" w-[50px] h-[50px] rounded-full ring-white shadow"
          style={profileImage}
        ></div>
        <div>
          <p className=" font-semibold text-sm">Tanvir Ahmed Emon</p>
          <p className="  text-sm">December 21</p>
        </div>
        <div>
          <p className="bg-primary hover:bg-[#6328a7] text-white px-2 rounded-lg cursor-pointer">
            follow
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div
          className=" w-[50px] h-[50px] rounded-full ring-white shadow"
          style={profileImage}
        ></div>
        <div>
          <p className=" font-semibold text-sm">Tanvir Ahmed Emon</p>
          <p className="  text-sm">December 21</p>
        </div>
        <div>
          <p className="bg-primary hover:bg-[#6328a7] text-white px-2 rounded-lg cursor-pointer">
            follow
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div
          className=" w-[50px] h-[50px] rounded-full ring-white shadow"
          style={profileImage}
        ></div>
        <div>
          <p className=" font-semibold text-sm">Tanvir Ahmed Emon</p>
          <p className="  text-sm">December 21</p>
        </div>
        <div>
          <p className="bg-primary hover:bg-[#6328a7] text-white px-2 rounded-lg cursor-pointer">
            follow
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
