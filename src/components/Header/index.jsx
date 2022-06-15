import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="bg-white p-14 top-0 sticky z-10  w-full flex flex-row justify-between items-center h-24 shadow-sm shadow-black">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <h1 className="text-2xl font-bold ">Blood Donation</h1>
        </div>
        <div className="md:flex space-x-5 hidden">
          <span
            className="text-lg hover-underline-animation "
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </span>
          <span
            className="text-lg hover-underline-animation "
            onClick={() => {
              navigate("/register");
            }}
          >
            Register{" "}
          </span>
          <span
            className="text-lg hover-underline-animation"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        </div>
        <div className="md:hidden">
          <button
            className="bg-transparent hover:bg-gray-300 text-gray-800 font-semibold hover:text-gray-900 py-2 px-4 border border-gray-300 hover:border-gray-400 rounded curosr-pointer"
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isSidebarOpen
            ? "w-[40vw] shadow-black shadow-xl right-0 top-0 "
            : "w-0 -right-[600px] "
        }   bg-white  h-screen fixed  transition-all duration-300  p-5 flex  flex-col z-50 space-y-14 `}
      >
        <svg
          viewport="0 0 12 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-64"
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        >
          <line x1="1" y1="11" x2="11" y2="1" stroke="black" strokeWidth="2" />
          <line x1="1" y1="1" x2="11" y2="11" stroke="black" strokeWidth="2" />
        </svg>
        <span
          className="text-lg hover-underline-animation "
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </span>
        <span
          className="text-lg hover-underline-animation "
          onClick={() => {
            navigate("/register");
          }}
        >
          Register{" "}
        </span>
        <span
          className="text-lg hover-underline-animation"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </span>
      </div>
    </>
  );
};

export default Header;
