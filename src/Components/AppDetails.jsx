import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useTrendingApps from "../Hooks/useTrendingApps";
import downloadImg from "../assets/download_icon.png";
import likeIcon from "../assets/Like-icon.png";
import { FaStar } from "react-icons/fa6";
import Barchart from "./BarProgress";
import { getLochalStorageData, setLochalStorageData } from "../Utility/LochalStorage";

const AppDetails = () => {
  const { id } = useParams();
  const { trendingApps, loading } = useTrendingApps();
  const singleData = trendingApps.find((app) => app.id === Number(id));

  const [installHandlerAdd, setInstallHandlerAdd] = useState(true);


  useEffect(() => {
  const installed = getLochalStorageData();
  if (installed.includes(id)) {
    setInstallHandlerAdd(false); 
  } else {
    setInstallHandlerAdd(true); 
  }
}, [id]);

  if (loading) return <p>Loading.....</p>;
  const {
    title,
    ratingAvg,
    downloads,
    image,
    companyName,
    size,
    reviews,
    description,
  } = singleData;

  return (
    <>
      <div className="md:px-7 px-2 py-10 max-w-7xl mx-auto">
        {/* Card */}
        <div>
          <div className="card flex flex-col sm:flex-row gap-10 border-b-2 border-gray-200 pb-4 rounded-none items-center">
            <figure className="w-80 h-60 bg-[#f1f5e8b5] rounded-lg">
              <img className="rounded-md" src={image} alt="Shoes" />
            </figure>
            <div className="space-y-3 w-full">
              <div className="border-b border-gray-200 pb-3">
                <h2 className="text-3xl font-bold text-[#001931] pb-1">
                  {title}
                </h2>
                <p className="text-[#627382] text-sm font-semibold">
                  Developed by{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-l to-[#632EE3] from-[#9F62F2]">
                    {companyName}
                  </span>
                </p>
              </div>
              <div className="flex gap-5 sm:gap-14 items-center pb-2">
                <div className="space-y-3 md:space-y-1">
                  <div>
                    <img className="w-6" src={downloadImg} alt="" />
                  </div>
                  <p className="text-[#627382] text-sm">Downloads</p>
                  <h1 className="text-2xl font-bold text-[#001931]">
                    {downloads}
                    <span>M</span>
                  </h1>
                </div>
                <div className="space-y-3 md:space-y-1">
                  <div className="text-[#FF8811] text-2xl">
                    <FaStar />
                  </div>
                  <p className="text-[#627382] text-sm">Average Ratings</p>
                  <h1 className="text-2xl font-bold text-[#001931]">
                    {ratingAvg}
                  </h1>
                </div>
                <div className="space-y-3 md:space-y-1">
                  <div>
                    <img className="w-6" src={likeIcon} alt="" />
                  </div>
                  <p className="text-[#627382] text-sm">Total Reviews</p>
                  <h1 className="text-2xl font-bold text-[#001931]">
                    {reviews}
                    <span>K</span>
                  </h1>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    setInstallHandlerAdd(false)
                    setLochalStorageData(id)
                  }}
                  className={`bg-[#00D390] text-base   font-medium px-4 py-2 rounded-md text-white transition-all ease-in duration-700 ${
                    installHandlerAdd ? "hover:bg-black cursor-pointer" : "cursor-not-allowed"
                  }`}
                >
                  {installHandlerAdd ? `Install Now (${size} MB)` : "Installed"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="py-5 border-b-2 border-gray-200 pb-3">
          <h1 className="text-xl font-bold text-[#001931] py-2">Ratings</h1>

          <div>
            <Barchart singleData={singleData}></Barchart>
          </div>
        </div>
        {/* description */}
        <div className="py-5">
          <h1 className="text-xl font-bold text-[#001931] py-2">Description</h1>
          <p className="text-[#627382] text-base">{description}</p>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
