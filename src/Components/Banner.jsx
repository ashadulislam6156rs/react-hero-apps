import React from "react";
import { Link } from "react-router";
import googlePlay from "../assets/googlePlay.png";
import appStroe from "../assets/AppStore.png";
import heroMobile from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      {/* hero Top  */}
      <div className="hero bg-base-200 min-h-96 pt-5 lg:pt-0 md:px-7 px-2">
        <div className="hero-content text-center">
          <div className="flex justify-center items-center flex-col">
            <h1 className="max-w-md text-5xl font-bold text-[#001931]">
              We Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l to-[#632EE3] from-[#9F62F2]">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="py-6 max-w-4xl px-4">
              At HERO.IO, we create innovative apps designed to make everyday
              life simpler, smarter, and more engaging. Our mission is to
              transform your ideas into digital experiences that truly make a
              meaningful impact.
            </p>
            <div className="flex gap-2 [@media(min-width:350px)]:gap-5 sm:gap-6">
              <Link
                to={"https://play.google.com/"}
                className="btn py-5 border-1 border-[#6c38e5] flex items-center hover:bg-black hover:text-white transition-all ease-in-out duration-700 font-semibold text-[#001931]"
              >
                <img className="w-5" src={googlePlay} alt="" />
                <span>Google Play</span>
              </Link>
              <Link
                to={"https://www.apple.com/app-store/"}
                className="btn py-5 border-1 border-[#6c38e5] flex items-center hover:bg-black hover:text-white transition-all ease-in-out duration-700 font-semibold text-[#001931]"
              >
                <img className="w-5" src={appStroe} alt="" />
                <span>App Store</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* hero middle  */}
      <div className="flex justify-center items-end pt-4 md:pt-0 md:px-7 px-2">
        <div>
          <img src={heroMobile} alt="" />
        </div>
      </div>
          {/* hero Bottom  */}
          <div className="bg-[linear-gradient(100deg,_#632EE3,_#9F62F2)] max-w-full mx-auto">
              <div className="flex justify-center items-center min-h-40 md:min-h-80 flex-col">
                  <h1 className="text-white text-base md:text-2xl lg:text-3xl font-bold mb-5 md:mb-10">Trusted by Millions, Built for You</h1>
                  <div className="grid grid-cols-3 gap-2 md:gap-15 lg:gap-25">
                      <div className="md:space-y-2 space-y-1 text-center">
                          <p className="text-white text-[7px] md:text-xs">Total Downloads</p>
                          <h1 className="text-white text-xl md:text-3xl lg:text-5xl font-extrabold">29.6M</h1>
                          <p className="text-white text-[7px] md:text-xs">21% more than last month</p>
                      </div>
                      <div className="md:space-y-2 space-y-1 text-center">
                          <p className="text-white text-[7px] md:text-xs">Total Reviews</p>
                          <h1 className="text-white text-xl md:text-3xl lg:text-5xl font-extrabold">906K</h1>
                          <p className="text-white text-[7px] md:text-xs">46% more than last month</p>
                      </div>
                      <div className="md:space-y-2 space-y-1 text-center">
                          <p className="text-white text-[7px] md:text-xs">Active Apps</p>
                          <h1 className="text-white text-xl md:text-3xl lg:text-5xl font-extrabold">132+</h1>
                          <p className="text-white text-[7px] md:text-xs">31 more will Launch</p>
                      </div>
                  </div>
                  
              </div>
              
          </div>
          
    </div>
  );
};

export default Banner;
