import React, { useState } from "react";
import PremiumBlend from "../assets/premiumBlend.png";
import Trawa from "../assets/trawa.jpg";
import HoverBtn from "./HoverBtn";
import ImageBox from "./ImageBox";
import Gallery from "./Gallery";

function featuredProjects() {
  const [str, setStr] = useState("");
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full h-[400vh] pt-28 rounded-t-2xl z-20 "
    >
      <div className="w-full px-14 border-b-[1px] border-zinc-700 pb-12">
        <h1 className="text-[52px] font-['Neue_Montreal'] tracking-wide leading-10 ">
          Featured projects
        </h1>
      </div>
      <Gallery />
      <div className="cards flex gap-10 p-14 ">
        <div
          className="w-1/2 peer/trawa"
          onMouseEnter={() => setStr("TRAWA")}
          onMouseLeave={() => setStr("")}
        >
          <ImageBox name="TRAWA" imgLink={Trawa} />
          <div className="flex my-5 gap-4">
            <HoverBtn text="Audit" />
            <HoverBtn text="CopyWriting" />
            <HoverBtn text="Sales deck" />
            <HoverBtn text="Slide design" />
          </div>
        </div>
        <div
          className="w-1/2 peer/premium"
          onMouseEnter={() => setStr("PREMIUM BLEND")}
          onMouseLeave={() => setStr("")}
        >
          <ImageBox name="PREMIUM BLEND" imgLink={PremiumBlend} />
          <div className="flex my-5 gap-4">
            <HoverBtn text="Agency" />
            <HoverBtn text="Company presenetation" />
          </div>
        </div>
        <span className="absolute hidden peer-hover/premium:flex peer-hover/trawa:flex top-[47%]  left-1/2 -translate-x-[50%] -translate-y-[50%] z-0">
          <p className="text-9xl font-['Test_Founders_Grotesk_X-Cond_SmBd'] text-[#CDEA68]">
            {str}
          </p>{" "}
        </span>
      </div>

      <button className="bg-black text-white uppercase rounded-full left-[41%] relative flex items-center gap-9 text-base tracking-tight py-4 px-6 mt-8">
        <p>view all case Studies</p>
        <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
      </button>

      <div className="w-full pt-28">
        <div className="w-full px-14 border-b-[1px] border-zinc-700 pb-12">
          <h1 className="text-[52px] font-['Neue_Montreal'] tracking-wide leading-10 ">
            Clients’ reviews
          </h1>
        </div>
        <div className="w-full h-full ">
          <div className=" w-full h-full flex flex-col items-center justify-center border-[1px] border-zinc-50">
            <h1 className="m-5">Whole reviews Section</h1>
            <p className="m-5">Which i have skipped for now</p>
          </div>
        </div>
        <div className="cards flex gap-5 p-14">
          <div className="w-1/2 bg-[#004D43] h-[50vh] rounded-xl   ">
            <div className="flex justify-center items-center h-[40vh]">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                className="flex justify-center items-center relative top-8 "
                alt=""
              />
            </div>
            <div className="p-5">
              <button className=" uppercase text-base border-[1px] rounded-full px-4 py-1 font-['Neue_Montreal'] border-[#CDEA68] text-[#CDEA68] ">
                ©2019-2022
              </button>
            </div>
          </div>
          <div className="w-1/2  h-[50vh] flex gap-5">
            <div className="w-1/2 bg-[#212121] h-[50vh] rounded-xl   ">
              <div className="flex justify-center items-center h-[40vh]">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                  className="flex justify-center items-center relative top-8 "
                  alt=""
                />
              </div>
              <div className="p-5">
                <HoverBtn text="Rating 5.0 on CLutch" />
              </div>
            </div>
            <div className="w-1/2 bg-[#212121] h-[50vh] rounded-xl   ">
              <div className="flex justify-center items-center h-[40vh]">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                  className="flex justify-center items-center relative top-8 "
                  alt=""
                  width={"120vw"}
                  height={"120vw"}
                />
              </div>
              <div className="p-5">
                <HoverBtn text="Bussiness Bootcamp alumini" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default featuredProjects;
