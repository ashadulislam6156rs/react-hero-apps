import React from "react";
import { useParams } from "react-router";
import useTrendingApps from "../Hooks/useTrendingApps";
import downloadImg from "../assets/download_icon.png";
import likeIcon from "../assets/Like-icon.png";
import { FaStar } from "react-icons/fa6";

const AppDetails = () => {
  const { id } = useParams();
  const { trendingApps, loading } = useTrendingApps();
  const singleData = trendingApps.find((app) => app.id === Number(id));

  const { title, ratingAvg, downloads, image } = { singleData } || {};
  console.log(singleData);
  console.log(title);

  return (
    <>
      <div className="md:px-7 px-2 py-10">
        {/* Card */}
        <div>
          <div className="card flex gap-5 flex-row border-b-2 border-gray-200 pb-4 rounded-none">
            <figure className="w-auto h-full bg-[#f1f5e8b5] rounded-lg">
              <img className="rounded-md" src="#" alt="Shoes" />
            </figure>
            <div className="space-y-3 w-full">
              <div className="border-b border-gray-200 pb-3">
                <h2 className="text-3xl font-bold text-[#001931] pb-1">SmPlan: <span>ToDo List with Reminder</span></h2>
                <p className="text-[#627382] text-sm font-semibold">
                  Developed by <span className="text-transparent bg-clip-text bg-gradient-to-l to-[#632EE3] from-[#9F62F2]">productive.io</span>
                </p>
              </div>
              <div className="flex gap-14 items-center">
                <div className="space-y-1">
                  <div>
                    <img className="w-6" src={downloadImg} alt="" />
                  </div>
                  <p className="text-[#627382] text-sm">Downloads</p>
                  <h1 className="text-2xl font-bold text-[#001931]">
                    8<span>M</span>
                  </h1>
                </div>
                <div className="space-y-1">
                  <div className="text-[#FF8811] text-2xl">
                    <FaStar />
                  </div>
                  <p className="text-[#627382] text-sm">Average Ratings</p>
                  <h1 className="text-2xl font-bold text-[#001931]">
                    4.9
                  </h1>
                </div>
                <div className="space-y-1">
                  <div>
                    <img className="w-6" src={likeIcon} alt="" />
                  </div>
                  <p className="text-[#627382] text-sm">Total Reviews</p>
                  <h1 className="text-2xl font-bold text-[#001931]">
                    54<span>K</span>
                  </h1>
                </div>
              </div>
              <div>
                <button className="bg-[#00D390] text-base font-medium px-2 py-1 rounded-md cursor-pointer text-white flex justify-between items-center gap-1">
                  Install Now (<span>291</span> MB)
                </button>
              </div>
            </div>
          </div>
        </div>
              {/* Bar Chart */}
              

              <div>
                  
                  

              </div>
      </div>
    </>
  );
};

export default AppDetails;
