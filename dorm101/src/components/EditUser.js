import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("1");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  return (
    <div className="p-5 h-screen  bg-gray-100">
      <div className="p-5 h-screen  bg-gray-300 rounded-3xl">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label font-semibold">ชื่อ-สกุล</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label font-semibold">รายละเอียดเเจ้งซ่อม</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label font-semibold">หอพัก</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="1">หอ 1</option>
                  <option value="2">หอ 2</option>
                  <option value="3">หอ 3</option>
                  <option value="4">หอ 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className=" bg-green-600 px-3 py-1 mt-3 text-white hover:bg-green-800 font-bold  rounded-xl">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
