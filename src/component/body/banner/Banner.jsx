import React from "react";
import bannerimg from "../../../assets/banner.png";
import Rectangle from "../../../assets/Rectangle-2.png";
import Play from "../../../assets/Play.png";
const Banner = () => {
  return (
    <div className="bg-white">
      <div className="max-w-11/12 lg:max-w-9/12 mx-auto flex flex-col md:flex-row justify-between gap-4  items-center py-10 lg:py-20">
        <div className="leftside">
          <div className="rounded-full bg-[#E1E7FF] p-2 flex items-center gap-2 justify-center max-w-[100%] md:max-w-[90%] lg:max-w-[320px] mb-8">
            <img className="w-[16px]" src={Rectangle} />
            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-center">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h2 className="text-gray-900 text-5xl md:text-5xl lg:text-6xl font-bold mb-8">
            Supercharge Your <br></br> <span>Digital Workflow</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Access premium AI tools, design assets, templates, and productivity
            <br></br>
            software—all in one place. Start creating faster today.<br></br>
            Explore Products
          </p>
          <div className="flex items-center gap-5">
            <a className="btn rounded-full text-white btn-lg bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold">
              Explore Products
            </a>
            <a
              className="btn btn-lg rounded-full  border-2 border-[#9514FA]  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] 
           bg-clip-border text-transparent bg-clip-text"
            >
              <img className="w-[20px]" src={Play} alt="Play" />
              Watch demo
            </a>
          </div>
        </div>
        <div className="right_img shadow-2xl">
          <img className="w-full" src={bannerimg} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
