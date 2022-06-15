import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import Cookies from "js-cookie";
const DashBoardHeader = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log();
  return (
    <>
      <div
        className={`bg-white p-4 top-0 sticky   flex flex-row justify-between w-full items-center h-[10%] shadow-sm shadow-black  z-10 `}
      >
        <div>
          <h1 className="text-lg font-bold text-red-400 block">
            Web based Application for Blood Donation
          </h1>
        </div>
        <div
          className="flex flex-row justify-center items-center space-x-3"
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <BsFillPersonLinesFill className="text-5xl hover:opacity-75 transition-all" />
          <h1 className="text-lg">
            {JSON.parse(Cookies.get("user_data")).name}
          </h1>
        </div>
        <div
          className={`absolute  bg-gray-100  space-x-4 flex justify-center items-center transition-all ${
            isDropdownOpen
              ? "right-0 top-16 w-32 h-20  opacity-100"
              : "opacity-0"
          }`}
          onClick={() => {
            // signout
            Cookies.remove("user_data");
            navigate("/login", { replace: true });
          }}
        >
          <GoSignOut className="text-xl " />
          <h1 className="text-gray-600">Signout</h1>
        </div>
      </div>
    </>
  );
};

export default DashBoardHeader;
