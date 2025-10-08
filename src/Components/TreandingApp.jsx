import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

const TreandingApp = ({ treindindApp }) => {
    
    const {title,ratingAvg,downloads,image,id} = treindindApp;
    
  return (
    <div className="card bg-base-100 shadow-sm p-5 hover:scale-97 hover:shadow-lg transition-all ease-in-out duration-500 cursor-pointer">
      <figure className="w-full h-full bg-[#f1f5e8b5] rounded-lg">
        <img className="rounded-md"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="space-y-3">
        <h2 className={`mt-3 font-medium  ${id == 3 ? "text-base" : "text-xl" }`}>{title}</h2>
        <div className="flex justify-between items-center">
                  <button className="bg-[#F1F5E8] text-base font-medium px-2 py-1 rounded-md cursor-pointer text-[#00D390] flex justify-between items-center gap-1">
                      <MdOutlineFileDownload />
                      <span>{downloads}M</span>
                      </button>
                  <button className="bg-[#FFF0E1] text-base font-medium px-2 py-1 rounded-md cursor-pointer text-[#FF8811] flex justify-between items-center gap-1"><FaStar /><span>{ratingAvg}</span></button>
        </div>
      </div>
    </div>
  );
};

export default TreandingApp;
