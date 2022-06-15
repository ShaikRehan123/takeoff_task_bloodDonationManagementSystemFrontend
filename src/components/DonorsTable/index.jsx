import { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const DonorsTable = ({ hospitalData }) => {
  // console.log(hospitalData);
  const [pagination, setPagination] = useState(1);
  // if pagination = 1 then show 4 hospitals from the start else if pagination = 2 then show 4 hospitals from the 5th hospital and so on
  const [hospitalDataToShow, setHospitalDataToShow] = useState(
    hospitalData.slice(pagination * 4 - 4, pagination * 4)
  );
  // console.log(hospitalDataToShow);
  useEffect(() => {
    setHospitalDataToShow(
      hospitalData.slice(pagination * 4 - 4, pagination * 4)
    );
  }, [pagination]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg space-y-3">
      <div>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="search"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            const search = e.target.value.trim();
            console.log(search);
            // if search is empty then show all hospitals
            if (search === "") {
              setHospitalDataToShow(hospitalData);
            } else {
              let temp = [...hospitalData];
              temp = temp.filter((hospital) => {
                return hospital.name
                  .toLowerCase()
                  .trim()
                  .includes(search.toLowerCase());
              });
              setHospitalDataToShow(temp);
            }
          }}
        />
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            <th scope="col" className="px-6 py-3 ">
              <AiOutlineArrowUp
                className="text-gray-500 dark:text-gray-400 text-lg"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in ascending order by id , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => {
                      return a.id - b.id;
                    })
                  );
                }}
              />
              <AiOutlineArrowDown
                className="text-gray-500 text-lg dark:text-gray-400"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in descending order by id , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  // console.log(temp);
                  setHospitalDataToShow(temp.sort((a, b) => b.id - a.id));
                }}
              />

              <span>Sno</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <AiOutlineArrowUp
                className="text-gray-500 dark:text-gray-400 text-lg"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in ascending order by name , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => {
                      return a.name.localeCompare(b.name);
                    })
                  );
                }}
              />
              <AiOutlineArrowDown
                className="text-gray-500 text-lg dark:text-gray-400"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in descending order by name , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => b.name.localeCompare(a.name))
                  );
                }}
              />
              <span>Name</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <AiOutlineArrowUp
                className="text-gray-500 dark:text-gray-400 text-lg"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in ascending order by email , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => {
                      return a.email.localeCompare(b.email);
                    })
                  );
                }}
              />
              <AiOutlineArrowDown
                className="text-gray-500 text-lg dark:text-gray-400"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in descending order by email , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => b.email.localeCompare(a.email))
                  );
                }}
              />
              <span>Email</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <AiOutlineArrowUp
                className="text-gray-500 dark:text-gray-400 text-lg"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in ascending order by phone , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => {
                      return a.phone - b.phone;
                    })
                  );
                }}
              />
              <AiOutlineArrowDown
                className="text-gray-500 text-lg dark:text-gray-400"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in descending order by phone , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(temp.sort((a, b) => b.phone - a.phone));
                }}
              />
              <span>Phone Number</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <AiOutlineArrowUp
                className="text-gray-500 dark:text-gray-400 text-lg"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in ascending order by addressress , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => {
                      return a.address.localeCompare(b.address);
                    })
                  );
                }}
              />
              <AiOutlineArrowDown
                className="text-gray-500 text-lg dark:text-gray-400"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in descending order by addressress , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => b.address.localeCompare(a.address))
                  );
                }}
              />
              <span>Address</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <AiOutlineArrowUp
                className="text-gray-500 dark:text-gray-400 text-lg"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in ascending order by b_city , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) =>
                      b.blood_group.localeCompare(a.blood_group)
                    )
                  );
                }}
              />
              <AiOutlineArrowDown
                className="text-gray-500 text-lg dark:text-gray-400"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in descending order by b_city , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) =>
                      a.blood_group.localeCompare(b.blood_group)
                    )
                  );
                }}
              />
              <span>Blood Group</span>
            </th>
            {/* <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {hospitalDataToShow?.map((hospital, index) => {
            return (
              <tr
                key={hospital.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-3 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {hospital.id}
                </th>
                <td className="px-3 py-2">{hospital.name}</td>
                <td className="px-3 py-2">{hospital.email}</td>
                <td className="px-3 py-2">{hospital.phone}</td>
                <td className="px-3 py-2">{hospital.address}</td>
                <td className="px-3 py-2">{hospital.blood_group}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-lg shadow-blue-300 rounded-full mb-2"
          // decrease pagination by 1
          onClick={() => {
            if (pagination > 1) {
              setPagination(pagination - 1);
            }
          }}
          disabled={pagination === 1}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg shadow-blue-300 mb-2"
          // increase pagination by 1
          onClick={() => {
            if (pagination < Math.ceil(hospitalData.length / 4)) {
              setPagination(pagination + 1);
            }
          }}
          disabled={pagination === Math.ceil(hospitalData.length / 4)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DonorsTable;
