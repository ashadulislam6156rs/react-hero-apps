import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router';
import  NotInstallAppsImg from "../assets/not-installApps.webp"

const ErrorAppNotInstall = () => {
    return (
        <div className="flex justify-center items-center pb-10">
      <div className="w-full h-full flex justify-between items-center flex-col gap-5">
        <img
          className="w-60 pt-10"
          src={NotInstallAppsImg}
          alt="No Installed Apps"
        />
        <h1 className="text-[#001931] font-bold text-3xl uppercase">
          No Apps Installed Yet.
        </h1>
        <p className="text-[#627382] text-base text-center max-w-md">
          Looks like you haven’t installed any apps yet.  
          Explore the store and start installing your favorite tools!
        </p>
        <Link
          to={"/AppsPage"}
          className="btn bg-gradient-to-l to-[#632EE3] from-[#9F62F2] hover:from-[#632EE3] hover:to-[#9F62F2] text-white flex items-center gap-2 px-5 py-2 rounded-md"
        >
          <HiOutlineHome />
          Go to Apps
        </Link>
      </div>
    </div>
    );
};

export default ErrorAppNotInstall;
