import Header from "../components/Header";
import notify from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen  w-screen">
      <Header />
      <div className="[background-image:url(http://localhost/blood_donation_management_system/images/4.jpg)] [background-size:100%_100%] [background-repeat:no-repeat] flex justify-center items-center p-5 h-screen">
        <form
          className="bg-white h-auto w-96 flex p-5 rounded-sm shadow-md shadow-black space-y-8 flex-col"
          onSubmit={async (e) => {
            e.preventDefault();
            // get form vlaues
            const body = {
              email: e.target.elements.email.value,
              password: e.target.elements.password.value,
            };
            // if there is empty field

            if (body.email.trim() === "" || body.password.trim() === "") {
              notify.error("Please fill all fields");
            }

            const res = await axios.post("http://localhost:8080/login", body);
            console.log(res);
            if (res.data.status === 500) {
              notify.error("Internal Server Error");
            }
            if (res.data.status === 404) {
              notify.error("Invalid Email or Password");
            }
            if (res.data.status === 200) {
              notify.success("Login Successful");

              // navigate("/login");

              if (res.data.data.role_id === 1) {
                navigate("/admin_hospitals");
              } else {
                Cookies.set("user_data", JSON.stringify(res.data.data));
                navigate("/user_profile");
              }
            }
          }}
        >
          <h1 className="text-3xl">Registration Form</h1>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="p-2 outline-none border-2 border-gray-800 rounded-lg focus-within:border-teal-300 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              placeholder="Enter Password"
              className="p-2 outline-none border-2 border-gray-800 rounded-lg focus-within:border-teal-300 transition-all duration-500"
            />
          </div>
          <button type="submit">
            <a className="relative inline-block text-sm font-medium text-teal-500 group active:text-orange-500 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-teal-500 group-hover:translate-y-0 group-hover:translate-x-0 [border-radius:10px]" />
              <span
                className="relative block px-8 py-3 bg-white border border-current"
                style={{ borderRadius: "8px" }}
              >
                Login
              </span>
            </a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
