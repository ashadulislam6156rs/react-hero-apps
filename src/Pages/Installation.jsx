import React, { useEffect, useState } from "react";
import { getLochalStorageData } from "../Utility/LochalStorage";
import useTrendingApps from "../Hooks/useTrendingApps";
import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { toast } from "react-toastify";
import ErrorAppNotInstall from "../ErrorApps/ErrorAppNotInstall";
import Loading from "../Components/Loading/Loading";

const Installation = () => {
  const { trendingApps, loading } = useTrendingApps();

  const [SortApps, setSortApps] = useState("none");
  const [myInstallApp, setMyInstallApp] = useState([]);

  useEffect(() => {
    const getInstallData = getLochalStorageData();
    const installData = getInstallData.map((app) => Number(app));
    const matchedApps = trendingApps.filter((app) =>
      installData.includes(app.id)
    );
    setMyInstallApp(matchedApps);
  }, [trendingApps]);

  const removeHandler = (id) => {
    const getInstallData = getLochalStorageData();
    const updateInstallIds = getInstallData.filter(
      (appId) => Number(appId) !== Number(id)
    );

    localStorage.setItem("InstalledApp", JSON.stringify(updateInstallIds));

     const updatedMyInstallApp = myInstallApp.filter(
    (app) => Number(app.id) !== Number(id)
  );
    setMyInstallApp(updatedMyInstallApp);
  };

  const sortHandler = () => {
    if (SortApps === "dec") {
      return [...myInstallApp].sort((a, b) => b.downloads - a.downloads);
    }
    if (SortApps === "asc") {
      return [...myInstallApp].sort((a, b) => a.downloads - b.downloads);
    }
    return myInstallApp;
  };
  
  

  const CurrentApps = sortHandler();

  return (
    <>
      {
        loading ? <Loading /> :
          <div className="max-w-7xl mx-auto md:px-7 px-2">
      <div className="text-center py-10">
        <h1 className="text-[#001931] font-bold text-2xl md:text-4xl pb-3">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between md:flex-row flex-col gap-5 md:gap-0 md:items-center pb-4">
        <div className="text-xl">
          <span >({myInstallApp.length})</span> Apps Found
        </div>
        <label className="form-control w-50 md:max-w-xs border-[#6c38e5] border rounded-md">
          <select
            className="select select-bordered"
            value={SortApps}
            onChange={(e) => setSortApps(e.target.value)}
          >
            <option value="none">Sort By Downloads Size</option>
            <option value="dec">High To Low</option>
            <option value="asc">Low To High</option>
          </select>
        </label>
      </div>

      {
        
         <div className="grid grid-cols-1 gap-5 md:mt-6 pb-6">
        { CurrentApps.length == 0 ? <ErrorAppNotInstall/> : CurrentApps.map((singleAppInstall, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-2 md:p-5 shadow-sm rounded-lg"
          >
            <div className="flex gap-3 md:gap-6 items-center flex-1">
              <figure className="rounded-lg w-auto h-20 md:h-48 ">
                <img
                  className="rounded-md w-20 md:w-48"
                  src={singleAppInstall.image}
                  alt="App"
                />
              </figure>
              <div className="space-y-2">
                <h2 className="lg:text-3xl md:text-2xl text-xs font-bold text-[#001931] pb-1">
                  {singleAppInstall.title}
                </h2>
                <div className="flex md:gap-4 gap-1 lg:gap-7 items-center">
                  <button className="md:text-xl text-xs font-medium py-1 rounded-md cursor-pointer text-[#00D390] flex justify-between items-center gap-1">
                    <MdOutlineFileDownload />
                    <span>{singleAppInstall.downloads}M</span>
                  </button>
                  <button className="md:text-xl text-xs font-medium px-2 py-1 rounded-md cursor-pointer text-[#FF8811] flex justify-between items-center gap-1">
                    <FaStar />
                    <span>{singleAppInstall.ratingAvg}</span>
                  </button>
                  <p className="text-[#627382] md:text-xl text-xs font-medium">
                    {singleAppInstall.size} <span>MB</span>
                  </p>
                </div>
              </div>
            </div>

            <button
                onClick={() => {
                  removeHandler(singleAppInstall.id)
                  toast.success(`🗑️ ${singleAppInstall.title} Uninstall from SmApps ToDo List successfully!`)
                }}
                className="bg-[#00D390] cursor-pointer hover:bg-black text-xs md:text-xl font-medium px-2 py-2 md:px-6 md:py-3 rounded-md text-white transition-all ease-in duration-700"
              >
                Uninstall
              </button>
          </div>
        ))}
      </div> 
      }  
    </div>
      }
    </>
  );
};

export default Installation;
