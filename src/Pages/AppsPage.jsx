import React, { useState } from "react";
import useTrendingApps from "../Hooks/useTrendingApps";
import All_app from "../Components/All_app";

const AppsPage = () => {

    const [userSearch,setUserSearch] = useState('')

    const { trendingApps } = useTrendingApps();

    const userSearchData = userSearch.trim().toLocaleLowerCase();
    
    const searchResultApps = userSearchData ? trendingApps.filter(app => app.title.toLocaleLowerCase().includes(userSearchData)) : trendingApps;
    
  return (
    <div className="max-w-7xl mx-auto md:px-7 px-2">
      <div>
        <div className="text-center py-10">
          <h1 className="text[#001931] font-bold text-4xl pb-2">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-base">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        {/* all cards */}
        <div>
          <div>
            <div className="flex justify-between items-center">
              <div>
                <span>({searchResultApps.length})</span> Apps Found
              </div>
              <div>
                <label className="input">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input type="search" value={userSearch} onChange={(e)=> setUserSearch(e.target.value)} required placeholder="Search Apps..." />
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-6">
                          {
                              searchResultApps.map((singleApp,id) => <All_app key={id} singleApp={singleApp}></All_app>)
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsPage;
