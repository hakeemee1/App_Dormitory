import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import AddUser from "./components/AddUser";
import UserList from "./components/UserList"
import EditUser from "./components/EditUser"
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/myteam" element={ <Team />}/>
        <Route path="/list/add" element={<AddUser/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/list" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="/list/edit/:id" element={<EditUser/>}/>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
