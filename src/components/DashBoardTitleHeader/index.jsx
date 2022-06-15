const DashboardTitleHeader = ({ module_name }) => {
  // console.log(module_name);
  return (
    <div className="bg-teal-300 sticky h-[8%] p-3">
      <h1 className="text-xl text-white">{module_name}</h1>
    </div>
  );
};

export default DashboardTitleHeader;
