import React, { useState } from "react";
import { FaBars, FaGithub, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { HiOutlineHome } from "react-icons/hi";
import { RiAppStoreLine } from "react-icons/ri";
import { GrInstallOption } from "react-icons/gr";

const Navbar = () => {
  const [barToggol, setBarToggol] = useState(true);
  return (
    <nav className="bg-base-100 shadow-sm max-w-full mx-auto font-WorkSans md:px-7">
      <div className="navbar max-w-7xl mx-auto">
        {/* navbar start */}
        <div className="navbar-start space-x-4 lg:space-x-0">
          <div
            onClick={() => setBarToggol(!barToggol)}
            className="bg-gray-300 rounded-md px-5 py-4 text-2xl cursor-pointer block lg:hidden relative overflow-hidden"
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                barToggol
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-0"
              }`}
            >
              <FaBars />
            </div>

            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                barToggol
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            >
              <FaXmark />
            </div>
          </div>
          {/* Small device menu list*/}
          <ul id="mobileDeviceActive"
            className={`bg-[#00000020] z-10 p-3 rounded-md shadow-lg absolute transition-all duration-300 ease-in-out -left-64 top-18 lg:hidden ${
              barToggol ? "" : "left-1 block"
            }`}
          >
            <li className="mb-2 shadow-md cursor-pointer ">
              <NavLink to={"/"} className="flex gap-2 items-center w-52 bg-slate-100 hover:bg-teal-600 font-semibold hover:text-white px-2 p-1 text-teal-600 rounded">
                <HiOutlineHome />
                Home
              </NavLink>
            </li>
            <li className="mb-2 shadow-md cursor-pointer">
              <NavLink to={"/appspage"} className="flex gap-2 items-center w-52 bg-slate-100 hover:bg-teal-600 font-semibold hover:text-white px-2 p-1 text-teal-600 rounded">
                <RiAppStoreLine />
                Apps
              </NavLink>
            </li>
            <li className="mb-2 shadow-md cursor-pointer">
              <NavLink to={"/installation"} className="flex gap-2 items-center w-52 bg-slate-100 hover:bg-teal-600 font-semibold hover:text-white px-2 p-1 text-teal-600 rounded">
                <GrInstallOption />
                Installation
              </NavLink>
            </li>
          </ul>
          <NavLink
            to={"/"}
            className="text-sm md:text-base font-semibold flex gap-1 items-center"
          >
            <img className="w-6" src={logo} alt="" />
            <span className="text-transparent bg-clip-text bg-gradient-to-l to-[#632EE3] from-[#9F62F2] -webkit-text-fill-color">HERO.IO</span>
          </NavLink>
        </div>
        {/* navbar menu list*/}
        <div className="navbar-center hidden lg:flex">
          <ul
            id="navLink"
            className="menu menu-horizontal px-1 font-medium text-[#00000098] space-x-5"
          >
            <li>
              <NavLink to={"/"} className={'text-base px-1 rounded-b-none'}>
                <HiOutlineHome />
                <span className="-ml-1 text-sm">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/appspage"} className={'text-base px-1 rounded-b-none'}>
                <RiAppStoreLine />
               <span className="-ml-1 text-sm">Apps</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/installation"} className={'text-base px-1 rounded-b-none'}>
                <GrInstallOption />
                <span className="-ml-1 text-sm">Installation</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* navbar buttons */}
        <div className="navbar-end space-x-2">
          <Link to={"https://github.com/ashadulislam6156rs"} className="btn bg-gradient-to-l hover:from-[#632EE3] hover:to-[#9F62F2] to-[#632EE3] from-[#9F62F2] text-white">
            <FaGithub />
            Contribute
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
