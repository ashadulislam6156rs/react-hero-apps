import React from 'react';
import Error404Img from "../assets/error-404.png"
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router';
const ErrorPage_404 = () => {
    return (
        <div className="flex justify-center items-center pb-10">
      <div className=" w-full h-full flex justify-between items-center flex-col gap-5">
        <img className="w-50 pt-10" src={Error404Img} alt="" />
        <h1 className="text[#001931] font-bold text-4xl uppercase">
          OPPS! Page Not Found.
        </h1>
        <p className="text-[#627382] text-base">
          The page you are looking for is not available.
        </p>
        <Link
          to={"/"}
          className="btn bg-gradient-to-l to-[#632EE3] from-[#9F62F2] hover:from-[#632EE3] hover:to-[#9F62F2] text-white"
        >
          <HiOutlineHome />
          Back Home
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage_404;