import React from "react";
import aboutImg from "../assets/aboutImg.jpg";

function about() {
  return (
    <div 
    data-scroll
    data-scroll-section
    data-scroll-speed="-.175"
      className="w-full h-[193vh] z-20 bg-[#CDEA68] rounded-t-2xl text-zinc-800 ">
      <div>
        <h1 className='font-["Neue_Montreal"] pt-[7vw] pb-16 pl-14 text-[3.5vw] leading-[3.75vw] tracking-normal max-w-[1250px]  '>
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.{" "}
        </h1>

        <div className="  grid grid-cols-4 gap-4 border-t-[2px] border-b-[2px] font-['Neue_Montreal'] border-[#63626282] pt-6 h-[22vw] ">
          <div className="col-span-2 m-5 pl-8">
            <p>What you can expect:</p>
          </div>
          <div className="col-span-1 max-w-[320px] p-3  ">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.{" "}
            </p>
            <br />
            <p className="max-w-[270px]">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="col-span-1 flex flex-col  ">
            <div className="relative top-[5vw] left-[3vw] p-5 w-[100px] ">
              <span className="m-3  ">S:</span>
              <ul className=" decoration-none m-5  ">
                <li className="underline  ">Instagram</li>
                <li className="underline">Behance</li>
                <li className="underline">Facebook</li>
                <li className="underline">Linkedin</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 font-['Neue_Montreal'] pl-14 p-6 peer">
          <div className="col-span-1 ">
            <h1 className="text-[50px] tracking-normal">Our approach:</h1>
            <button className="bg-zinc-800 text-white uppercase rounded-full flex items-center gap-9 text-base tracking-tight py-4 px-6 mt-2">
              <p>Read More</p>
              <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
            </button>
          </div>
          <div className="cols-span-1 rounded-2xl  group hover:scale-[0.97] transition ease-in duration-700 overflow-hidden flex items-center">
            <img
              src={aboutImg}
              alt=""
              className="rounded-2xl group-hover:scale-110 transition ease-in duration-700 overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
