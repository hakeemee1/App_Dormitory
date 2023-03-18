import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 h-screen  bg-gray-100 ">
      <div className=" mt-5">
        <Link to={`add`} className=" bg-blue-600 text-white p-3 ml-3 rounded-full shadow-sm hover:bg-green-500 ">
          เเจ้งซ่อม
        </Link>
        <table className=" w-3/4 content-center mt-10">
          <thead className=" bg-red border-gray-400 rounded-xl">
            <tr>
              <th className=" p-3 text-sm bg-gray-100 border-b-2 border-gray-200 font-semibold tracking-wide text-left ">ลำดับ</th>
              <th className=" p-3 text-sm bg-gray-100 border-b-2 border-gray-200 font-semibold tracking-wide text-left ">ชื่อ-สกุล</th>
              <th className=" p-3 text-sm bg-gray-100 border-b-2 border-gray-200 font-semibold tracking-wide text-left ">รายละเอียดเเจ้งซ่อม</th>
              <th className=" p-3 text-sm bg-gray-100 border-b-2 border-gray-200 font-semibold tracking-wide text-left ">หอพัก</th>
             
             
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className=" bg-gray-300 rounded-md">
                <td className=" p-3 text-sm text-gray-700">{index + 1}</td>
                <td className=" p-3 text-sm text-gray-700">{user.name}</td>
                <td className=" p-3 text-sm text-gray-700">{user.email}</td>
                <td className=" p-3 text-sm text-gray-700">{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className=" bg-green-500 m-4 p-2 rounded-lg"
                  >
                    เเก้ไข
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className=" bg-red-600 m-4 p-2 rounded-lg text-white"
                  >
                    ลบข้อมูล 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
