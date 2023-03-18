import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/list" className="flex items-center">
          ลิสต์แจ้งซ่อม
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/list/add" className="flex items-center">
          แจ้งซ่อม
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" font-normal bg-blue-400 rounded-md p-2 hover:bg-red-500"
      >
        <a href="/myteam" className="flex items-center">
          DEV TEAM
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/home"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>App Dorm</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div>
          {/* Edit route plz */}
        </div>
      </div>
      {/* ___________________________________ */}
      

    </Navbar>
  );
}