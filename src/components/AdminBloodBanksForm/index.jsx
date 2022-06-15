import React from "react";
import axios from "axios";
import notify from "react-hot-toast";
const AdminBloodBanksForm = () => {
  return (
    <form
      className="bg-white p-5 flex justify-center flex-col space-y-6"
      onSubmit={async (e) => {
        e.preventDefault();
        const body = {
          name: e.target.elements.hospital_name.value,
          address: e.target.elements.hospital_address.value,
          phone: e.target.elements.hospital_phone.value,
          email: e.target.elements.hospital_email.value,
          description: e.target.elements.hospital_description.value,
        };
        if (
          body.name.trim() === "" ||
          body.address.trim() === "" ||
          body.phone.trim() === "" ||
          body.email.trim() === "" ||
          body.description.trim() === ""
        ) {
          notify.error("Please fill all fields");
        } else if (body.phone.length !== 10) {
          notify.error("Please enter valid phone number");
        } else {
          const res = await axios.post(
            "http://localhost:8080/add_bloodbank",
            body
          );
          if (res.data.status == 500) {
            notify.error("Internal Server Error");
          } else if (res.data.status == 200) {
            notify.success("Blood Bank Added Successfully");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        }
      }}
    >
      <input
        type="text"
        name="hospital_name"
        placeholder="Enter Blood Bank Name"
        className="p-2 outline-none border-b border-b-gray-700  focus-within:border-teal-300 transition-all duration-500 w-[50%]"
      />
      <input
        type="email"
        name="hospital_email"
        placeholder="Enter Blood Bank Email"
        className="p-2 outline-none border-b border-b-gray-700  focus-within:border-teal-300 transition-all duration-500 w-[50%]"
      />
      <input
        type="text"
        name="hospital_phone"
        placeholder="Enter Blood Bank Phone Number"
        className="p-2 outline-none border-b border-b-gray-700  focus-within:border-teal-300 transition-all duration-500 w-[50%]"
      />
      <input
        type="text"
        name="hospital_address"
        placeholder="Enter Blood Bank Address"
        className="p-2 outline-none border-b border-b-gray-700  focus-within:border-teal-300 transition-all duration-500 w-[50%]"
      />
      <input
        type="text"
        name="hospital_description"
        placeholder="Enter Blood Bank Description"
        className="p-2 outline-none border-b border-b-gray-700  focus-within:border-teal-300 transition-all duration-500 w-[50%]"
      />
      <button type="submit">
        <a className="relative inline-block text-sm font-medium text-teal-500 group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-teal-500 group-hover:translate-y-0 group-hover:translate-x-0 [border-radius:10px]" />
          <span
            className="relative block px-8 py-3 bg-white border border-current"
            style={{ borderRadius: "8px" }}
          >
            Add Blood Bank
          </span>
        </a>
      </button>
    </form>
  );
};

export default AdminBloodBanksForm;
