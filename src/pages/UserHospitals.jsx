import DashBoardHeader from "../components/DashboardHeader";
import DashboardTitleHeader from "../components/DashBoardTitleHeader";
import HospitalTable from "../components/HospitalTable";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const UserHospitals = () => {
  const [isLoading, setISLoading] = useState(true);
  const [hospitalData, setHospitalData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(`http://localhost:8080/get_all_hospitals`);
      if (res.data.status === 500) {
        notify.error("Internal Server Error");
      } else {
        setHospitalData(res.data.data);
        setTimeout(() => {
          setISLoading(false);
        }, 1000);
      }
    };
    if (Cookies.get("user_data") == undefined) {
      notify.error("Please login to Continue");
      // wait for 3 seconds to redirect to login page
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1000);
    } else {
      getUserData();
    }
  }, []);

  if (isLoading) {
    return (
      <div className="justify-center h-screen flex items-center">
        <p>l</p>
        <p>o</p>
        <p>a</p>
        <p>d</p>
        <p>i</p>
        <p>n</p>
        <p>g</p>
      </div>
    );
  } else {
    // console.log(hospitalData);
    return (
      <div>
        <div className="flex flex-row ">
          <Sidebar />
          <div className="w-full ">
            <DashBoardHeader />
            <DashboardTitleHeader module_name={"Hospitals"} />
            <div className="m-5 bg-gray-200 p-3 rounded-md shadow-lg shadow-gray-700 ">
              <HospitalTable hospitalData={hospitalData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserHospitals;
