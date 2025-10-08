import React from "react";

const Installation = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-7 px-2">
      <div>
        <div className="text-center py-10">
          <h1 className="text[#001931] font-bold text-4xl pb-2">
            Your Installed Apps
          </h1>
          <p className="text-[#627382] text-base">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <span>(12)</span> Apps Found
            </div>
            <div>
              <select
                className="py-2 px-3 border rounded-md"
                name="sortDropdown"
                id="sortDropdown"
              >
                <option value="">Sort By Size</option>
                <option value="sizeDesc">Sort By (High to Low)</option>
                <option value="sizeAsc">Sort By (Low to High)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
