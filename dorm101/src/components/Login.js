import React from "react";
import Oauth from "./Oauth"


function Login() {
  return (
    <div>
      <section className=" bg-gray-100 min-h-screen flex items-center justify-center">
        {/* login container  */}
        <div className=" bg-blue-200 flex shadow-xl rounded-xl max-w-3xl">
          {/* form */}
          <div className=" w-1/2 ">
            <h1 className=" font-bold text-4xl p-10 pb-1 text-blue-600">Login</h1>
            <p className=" text-sm font-thin p-10 pt-3">
              ยินดีต้อรับเข้าสู่ App Dormitory สำหรับการเเจ้งซ่อมเเละข้อมูลต่างๆ
            </p>
            <div className=" mt-10 grid grid-cols-3 items-center text-gray-400">
              <hr className=" border-gray-400 ml-10" />
              <p className=" text-center">Login with Google Oauth</p>
              <hr className=" border-gray-400 mr-10" />
            </div>
            <Oauth />
          </div>
          {/* image */}
          <div className=" w-1/2 p-5">
            <img
              src="https://i.pinimg.com/564x/3d/f3/7c/3df37c2a1851bb565f0b6b742a3d30c8.jpg"
              alt="genderimg"
              className=" rounded-xl"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
