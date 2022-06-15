import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import DashBoardHeader from "../components/DashboardHeader";
import notify from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DashboardTitleHeader from "../components/DashBoardTitleHeader";
import Sidebar from "../components/Sidebar";
import axios from "axios";
const Dashboard_Profile = () => {
  const [isLoading, setISLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = async () => {
      const id = JSON.parse(Cookies.get("user_data")).id;
      const res = await axios.get(
        `http://localhost:8080/get_user_by_id?id=${id}`
      );
      if (res.data.status === 500) {
        notify.error("Internal Server Error");
      } else {
        setUserData(res.data.data);
        setISLoading(false);
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
      <div className="w-screen h-screen justify-center items-center">
        Loading...
      </div>
    );
  } else {
    console.log(userData);
    return (
      <>
        <div className="flex flex-row">
          <Sidebar />
          <div className="w-full">
            <DashBoardHeader />
            <DashboardTitleHeader module_name={"Profile"} />
            <div>
              <form
                className="mt-10 bg-gray-100 rounded-md p-5 m-5 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.table(e.target.elements);
                  const body = {
                    id: userData.id,
                    name: e.target.elements.name.value,
                    email: e.target.elements.email.value,
                    phone: e.target.elements.phone_number.value,
                    address: e.target.elements.address.value,
                    blood_group: e.target.elements.blood_group.value,
                    password: e.target.elements.password.value,
                    active:
                      e.target.elements.donor_availability.value ==
                      "not_a_donor"
                        ? 0
                        : 1,
                  };
                  // if there is empty field
                  if (
                    body.name.trim() === "" ||
                    body.email.trim() === "" ||
                    body.phone.trim() === "" ||
                    body.address.trim() === "" ||
                    body.blood_group.trim() === "" ||
                    body.password.trim() === ""
                  ) {
                    notify.error("Please fill all the fields");
                  } else {
                    axios
                      .put("http://localhost:8080/update_user", body)
                      .then((res) => {
                        if (res.data.status === 500) {
                          notify.error("Internal Server Error");
                        } else {
                          notify.success("Profile Updated Successfully");

                          // navigate("/dashboard");
                          setTimeout(() => {
                            window.location.reload();
                          }, 1000);
                        }
                      })
                      .catch((err) => {
                        notify.error("Internal Server Error");
                      });
                  }
                  // console.log(body);
                }}
              >
                <h1 className="text-xl text-gray-500 mb-3">Your Profile</h1>
                <div>
                  <input
                    placeholder="Name"
                    name="name"
                    type="text"
                    defaultValue={userData.name}
                    className="outline-none bg-transparent p-3 border-b border-b-gray-400 transition-all focus:border-b-teal-400 w-[50%]"
                  />
                </div>
                <div>
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    defaultValue={userData.email}
                    className="outline-none bg-transparent p-3 border-b border-b-gray-400 transition-all focus:border-b-teal-400 w-[50%]"
                  />
                </div>
                <div>
                  <input
                    placeholder="Phone number"
                    name="phone_number"
                    type="text"
                    defaultValue={userData.phone}
                    className="outline-none bg-transparent p-3 border-b border-b-gray-400 transition-all focus:border-b-teal-400 w-[50%]"
                  />
                </div>
                <div>
                  <input
                    placeholder="Password"
                    name="password"
                    type="password"
                    defaultValue={userData.password}
                    className="outline-none bg-transparent p-3 border-b border-b-gray-400 transition-all focus:border-b-teal-400 w-[50%]"
                  />
                </div>
                <div>
                  <input
                    placeholder="Address"
                    name="address"
                    defaultValue={userData.address}
                    className="outline-none bg-transparent p-3 border-b border-b-gray-400 transition-all focus:border-b-teal-400 w-[50%]"
                  />
                </div>
                <div>
                  <select
                    name="blood_group"
                    className="outline-none bg-transparent p-3 border-b border-b-gray-400 transition-all focus:border-b-teal-400 w-[50%]"
                    id="blood_group"
                    defaultValue={userData.blood_group}
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div>
                  <select
                    name="donor_availability"
                    className="outline-none bg-transparent p-3 border-b border-b-gray-400 transition-all focus:border-b-teal-400 w-[50%]"
                    id="donor_availability"
                    defaultValue={
                      userData.active == 0 ? "not_a_donor" : "be_a_donor"
                    }
                  >
                    <option value="not_a_donor">Not a Donor</option>
                    <option value="be_a_donor">Be a Donor</option>
                  </select>
                </div>
                <button type="submit">
                  <a className="relative inline-block text-sm font-medium text-pink-500 group hover:text-orange-500 focus:outline-none focus:ring">
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-pink-500 group-hover:translate-y-0 group-hover:translate-x-0 [border-radius:10px]" />
                    <span
                      className="relative block px-8 py-3 bg-white border border-current"
                      style={{ borderRadius: "8px" }}
                    >
                      Update Profile
                    </span>
                  </a>
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard_Profile;
