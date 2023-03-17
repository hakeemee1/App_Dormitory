import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import AddUser from "./components/AddUser";
import UserList from "./components/UserList"
import EditUser from "./components/EditUser"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/add" element={<AddUser/>}/>
        <Route path="/home" element={<UserList/>}/>
        <Route path="/home" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
