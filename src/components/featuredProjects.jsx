import React from "react";
import Fyde from "../assets/fyde.png";
import vise from "../assets/Vise_front.jpg";

function featuredProjects() {
  return (
    <div className="w-full pt-28">
      <div className="w-full px-14 border-b-[1px] border-zinc-700 pb-12">
        <h1 className="text-[52px] font-['Neue_Montreal'] tracking-wide leading-10 ">
          Featured projects
        </h1>
      </div>
      <div className="cards flex gap-10 p-14 ">
        <div className="card w-1/2 h-[75vh] rounded-2xl overflow-hidden group hover:scale-[0.97] transition ease-in-out duration-300 ">
          <img
            className="rounded-2xl group-hover:scale-110 transition ease-in-out duration-700 overflow-hidden"
            src={Fyde}
            alt="Fyde"
          />
            
        </div>
        <div className="card w-1/2 h-[75vh] rounded-2xl overflow-hidden group hover:scale-[0.97] transition ease-in duration-300 ">
          <img
            src={vise}
            alt="Vise"
            className="rounded-2xl group-hover:scale-110 transition ease-in-out duration-700 overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default featuredProjects;
