import Header from "../components/Header";

const Register = () => {
  return (
    <div className="h-screen  w-screen">
      <Header />
      <div className="[background-image:url(http://localhost/blood_donation_management_system/images/4.jpg)] h-screen w-screen [background-size:100%_100%] [background-repeat:no-repeat] flex justify-center items-center">
        <div className="bg-white h-auto w-96 flex p-5 rounded-sm shadow-md shadow-black space-y-8 flex-col">
          <h1 className="text-3xl">Registration Form</h1>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Enter your Name"
              className="p-2 outline-none border-2 border-gray-300 rounded-lg focus-within:border-teal-300 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
