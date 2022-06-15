import Header from "../components/Header";

const Home = () => {
  return (
    <div className="h-screen  w-screen">
      <Header />
      <div className="[background-image:url(http://localhost/blood_donation_management_system/images/4.jpg)] h-screen w-screen [background-size:100%_100%] [background-repeat:no-repeat] flex justify-center items-center animate__flash animate__animated">
        <h1 className="text-4xl text-white text-center animate__fadeInRight animate__animated ">
          Online Blood Donation <br /> Management System
        </h1>
      </div>
    </div>
  );
};

export default Home;
