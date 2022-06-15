import { useEffect, useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiFillDelete,
} from "react-icons/ai";
import axios from "axios";
import notify from "react-hot-toast";

const AdminBloodBanksTable = ({ hospitalData }) => {
  // console.log(hospitalData);
  const [pagination, setPagination] = useState(1);
  // if pagination = 1 then show 4 hospitals from the start else if pagination = 2 then show 4 hospitals from the 5th hospital and so on
  const [hospitalDataToShow, setHospitalDataToShow] = useState(
    hospitalData.slice(pagination * 2 - 2, pagination * 2)
  );
  // console.log(hospitalDataToShow);
  useEffect(() => {
    setHospitalDataToShow(
      hospitalData.slice(pagination * 2 - 2, pagination * 2)
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
                return hospital.b_name
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
                  // sort the hospitaldatatoshow in ascending order by b_name , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => {
                      return a.b_name.localeCompare(b.b_name);
                    })
                  );
                }}
              />
              <AiOutlineArrowDown
                className="text-gray-500 text-lg dark:text-gray-400"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in descending order by b_name , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => b.b_name.localeCompare(a.b_name))
                  );
                }}
              />
              <span>Hospital Name</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <AiOutlineArrowUp
                className="text-gray-500 dark:text-gray-400 text-lg"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in ascending order by b_email , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => {
                      return a.b_email.localeCompare(b.b_email);
                    })
                  );
                }}
              />
              <AiOutlineArrowDown
                className="text-gray-500 text-lg dark:text-gray-400"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in descending order by b_email , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => b.b_email.localeCompare(a.b_email))
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
                  // sort the hospitaldatatoshow in ascending order by b_phone , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => {
                      return a.b_phone - b.b_phone;
                    })
                  );
                }}
              />
              <AiOutlineArrowDown
                className="text-gray-500 text-lg dark:text-gray-400"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in descending order by b_phone , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => b.b_phone - a.b_phone)
                  );
                }}
              />
              <span>Phone Number</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <AiOutlineArrowUp
                className="text-gray-500 dark:text-gray-400 text-lg"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in ascending order by b_address , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => {
                      return a.b_add.localeCompare(b.b_add);
                    })
                  );
                }}
              />
              <AiOutlineArrowDown
                className="text-gray-500 text-lg dark:text-gray-400"
                onClick={() => {
                  console.log("clicked");
                  // sort the hospitaldatatoshow in descending order by b_address , first make copy of hospitaldatatoshow and then sort it
                  let temp = [...hospitalDataToShow];
                  setHospitalDataToShow(
                    temp.sort((a, b) => b.b_add.localeCompare(a.b_add))
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
                    temp.sort((a, b) => b.b_desc.localeCompare(a.b_desc))
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
                    temp.sort((a, b) => a.b_desc.localeCompare(b.b_desc))
                  );
                }}
              />
              <span>Description</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
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
                <td className="px-3 py-2">{hospital.b_name}</td>
                <td className="px-3 py-2">{hospital.b_email}</td>
                <td className="px-3 py-2">{hospital.b_phone}</td>
                <td className="px-3 py-2">{hospital.b_add}</td>
                <td className="px-3 py-2">{hospital.b_desc}</td>
                <td className="px-3 py-2">
                  <AiFillDelete
                    className="text-xl  text-pink-700"
                    onClick={async () => {
                      const res = await axios.delete(
                        `http://localhost:8080/delete_bloodbank?id=${hospital.id}`
                      );
                      if (res.data.status === 200) {
                        notify.success("Blood Bank Deleted Successfully");
                        setTimeout(() => {
                          window.location.reload();
                        }, 1000);
                      } else {
                        notify.error("Error in Blood Bank Hospital");
                      }
                    }}
                  />
                </td>
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
            if (pagination < Math.ceil(hospitalData.length / 2)) {
              setPagination(pagination + 1);
            }
          }}
          disabled={pagination === Math.ceil(hospitalData.length / 2)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminBloodBanksTable;
