import React from "react";
import Eye from "./eye";

function ready() {
  return (
    <div className="w-full h-[160vh] bg-[#CDEA68] pt-32 rounded-t-xl">
      <div className="w-full h-[120vh] flex items-center relative">
        <div className="absolute z-[2]  w-1/2 h-64 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10 flex justify-center">
          <Eye num={2} />
          <Eye num={3} />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col items-center uppercase pt-32 z-[1] leading-[0.75] text-zinc-800 text-[17vw] font-['Test_Founders_Grotesk_X-Cond_SmBd'] ">
            <p>Ready</p>
            <p>to start</p>
            <p>The Project</p>
          </div>
          <div className="flex flex-col items-center p-12 font-['Neue_Montreal']">
            <button className="bg-zinc-800 text-white uppercase rounded-full flex items-center gap-9 text-base tracking-tight py-4 px-6 mt-4">
              <p>Start The Project</p>
              <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
            </button>
            <div className="p-4 pt-6 text-black text-base">OR</div>
            <button className=" border-2 border-zinc-900 text-zinc-900 uppercase rounded-full flex items-center gap-9 text-base tracking-tight py-4 px-6 mt-2">
              <p>HEllo@ochi.design</p>
              <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ready;
