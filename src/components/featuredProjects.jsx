import React from "react";
import Fyde from "../assets/fyde.png";
import vise from "../assets/Vise_front.jpg";
import PremiumBlend from "../assets/premiumBlend.png";
import Trawa from "../assets/trawa.jpg";
import HoverBtn from "./hoverBtn";
import ochi from "../assets/logo.png";

function featuredProjects() {
  return (
    <div className="w-full pt-28 rounded-t-2xl ">
      <div className="w-full px-14 border-b-[1px] border-zinc-700 pb-12">
        <h1 className="text-[52px] font-['Neue_Montreal'] tracking-wide leading-10 ">
          Featured projects
        </h1>
      </div>
      <div className="cards flex gap-10 p-14 ">
        <div className="w-1/2">
          <div className="text-sm font-['Neue_Montreal'] flex gap-3 m-3 items-center">
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div> FYDE
          </div>
          <div className="card  h-[75vh] rounded-2xl overflow-hidden group hover:scale-[0.97] transition ease-in duration-300 border-zinc-300 border-[0.1px]">
            <img
              className="rounded-2xl group-hover:scale-110 transition ease-in-out duration-700 overflow-hidden"
              src={Fyde}
              alt="Fyde"
            />
          </div>
          <div className="flex my-5 gap-4">
            <HoverBtn text="Audit" />
            <HoverBtn text="CopyWriting" />
            <HoverBtn text="Sales deck" />
            <HoverBtn text="Slide design" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-sm font-['Neue_Montreal'] flex gap-3 m-3 items-center">
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>VISE
          </div>
          <div className="card  h-[75vh] rounded-2xl overflow-hidden group hover:scale-[0.97] transition ease-in duration-300 border-zinc-300 border-[0.1px]">
            <img
              src={vise}
              alt="Vise"
              className="rounded-2xl group-hover:scale-110 transition ease-in-out duration-700 overflow-hidden"
            />
          </div>
          <div className="flex my-5 gap-4">
            <HoverBtn text="Agency" />
            <HoverBtn text="Company presenetation" />
          </div>
        </div>
      </div>
      <div className="cards flex gap-10 p-14 ">
        <div className="w-1/2">
          <div className="text-sm font-['Neue_Montreal'] flex gap-3 m-3 uppercase items-center">
            <div className="w-2 h-2 rounded-full  bg-zinc-100"></div> Trawa
          </div>
          <div className="card  h-[75vh] rounded-2xl overflow-hidden group hover:scale-[0.97] transition ease-in duration-300 border-zinc-300 border-[0.1px] ">
            <img
              className="rounded-2xl group-hover:scale-110 transition ease-in-out duration-700 overflow-hidden"
              src={Trawa}
              alt="Trawa"
            />
          </div>
          <div className="flex my-5 gap-4">
            <HoverBtn text="Audit" />
            <HoverBtn text="CopyWriting" />
            <HoverBtn text="Sales deck" />
            <HoverBtn text="Slide design" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-sm font-['Neue_Montreal'] flex gap-3 m-3 uppercase items-center">
            <div className="w-2 h-2 rounded-full  bg-zinc-100"></div>Premium
            Blend
          </div>
          <div className="card  h-[75vh] rounded-2xl overflow-hidden group hover:scale-[0.97] transition ease-in duration-300 border-zinc-300 border-[0.1px]">
            <img
              src={PremiumBlend}
              alt="Vise"
              className="rounded-2xl group-hover:scale-110 transition ease-in-out duration-700 overflow-hidden"
            />
          </div>
          <div className="flex my-5 gap-4">
            <HoverBtn text="Agency" />
            <HoverBtn text="Company presenetation" />
          </div>
        </div>
      </div>

      <button className="bg-zinc-800 text-white uppercase rounded-full left-[41%] relative flex items-center gap-9 text-base tracking-tight py-4 px-6 mt-8">
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
