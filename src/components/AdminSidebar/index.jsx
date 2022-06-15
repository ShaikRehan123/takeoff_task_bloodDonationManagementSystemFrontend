import React, { useState } from "react";
import { BsTextIndentLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <aside
      className={`${
        isSidebarOpen ? "min-w-[25vw] shadow-black shadow-xl" : "min-w-[8vw] "
      }   bg-gray-600 text-white  min-h-[110vh] sticky  transition-all duration-300 left-0 top-0 p-5 flex  flex-col z-50 space-y-14 hover:min-w-[25vw] items-center mb-[-55px]   `}
      // HIDE SIDE BAR If user click outside of the sidebar
      onBlur={() => {
        setIsSidebarOpen(false);
      }}
    >
      <BsTextIndentLeft
        className={`absolute right-2 text-3xl text-white transition-all ${
          isSidebarOpen ? "rotate-180" : null
        }`}
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
        }}
      />
      <span
        className="text-lg hover-underline-animation text-center "
        onClick={() => {
          navigate("/admin_hospitals");
        }}
      >
        View Hospitals
      </span>
      <span
        className="text-lg hover-underline-animation text-center"
        onClick={() => {
          navigate("/admin_bloodbanks");
        }}
      >
        View Blood Banks
      </span>
      <span
        className="text-lg hover-underline-animation text-center"
        onClick={() => {
          navigate("/admin_users");
        }}
      >
        View Users
      </span>
    </aside>
  );
};

export default AdminSidebar;
