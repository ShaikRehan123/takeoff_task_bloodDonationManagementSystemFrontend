import Header from "../components/Header";
import notify from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen  w-screen">
      <Header />
      <div className="[background-image:url(http://localhost/blood_donation_management_system/images/4.jpg)] [background-size:100%_100%] [background-repeat:no-repeat] flex justify-center items-center p-5">
        <form
          className="bg-white h-auto w-96 flex p-5 rounded-sm shadow-md shadow-black space-y-8 flex-col"
          onSubmit={async (e) => {
            e.preventDefault();
            // get form vlaues
            const body = {
              name: e.target.elements.name.value,
              email: e.target.elements.email.value,
              phone_number: e.target.elements.phone_number.value,
              blood_group: e.target.elements.blood_group.value,
              address: e.target.elements.address.value,
              password: e.target.elements.password.value,
            };
            // if there is empty field
            if (
              body.name.trim() === "" ||
              body.email.trim() === "" ||
              body.password.trim() === "" ||
              body.phone_number.trim() === "" ||
              body.address.trim() === ""
              // ||
              // blood_group == ""
            ) {
              notify.error("Please fill all the fields");
            } else if (body.password.length < 6) {
              notify.error("Password must be atleast 6 characters long");
            } else if (body.phone_number.length < 10) {
              notify.error("Phone number must be atleast 10 characters long");
            }
            // if phone number contains other than numbers
            else if (/[^0-9]/g.test(body.phone_number)) {
              notify.error("Phone number must contain only numbers");
            } else {
              const res = await axios.post(
                "http://localhost:8080/signup",
                body
              );
              console.log(res);
              if (res.data.status === 200) {
                notify.success("Registration Successful");
                navigate("/login");
              }
              if (res.data.status === 500) {
                notify.error("Registration Failed");
              }
            }
          }}
        >
          <h1 className="text-3xl">Registration Form</h1>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your Name"
              className="p-2 outline-none border-2 border-gray-800 rounded-lg focus-within:border-teal-300 transition-all duration-500"
            />
          </div>
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
            <label htmlFor="phone_number" className="text-gray-700">
              Phone Number
            </label>
            <input
              id="phone_number"
              name="phone_number"
              placeholder="Enter your Phone Number"
              className="p-2 outline-none border-2 border-gray-800 rounded-lg focus-within:border-teal-300 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="blood_group" className="text-gray-700">
              Blood Group
            </label>
            <select
              name="blood_group"
              className="p-2 outline-none border-2 border-gray-800 rounded-lg focus-within:border-teal-300 transition-all duration-500"
              id="blood_group"
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
          <div className="flex flex-col space-y-2">
            <label htmlFor="address" className="text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              placeholder="Write your address Here"
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
                Register
              </span>
            </a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
