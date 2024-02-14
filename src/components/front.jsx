import { motion } from "framer-motion";
import React from "react";
// import OchiFront from '../assets/ochifront.png'

function front() {
	
	return (
		<div 
		data-scroll
		data-scroll-section
		data-scroll-speed="-.5"
		 className=" z-40 w-full h-screen bg-zinc-900 pt-1">
			<div className="textstructure mt-[150px] px-14">
				{["we create", "eye-opening", "Presentations"].map((item, index) => {
					return (
						<div className="masker" key={index}>
							<div className="w-fit flex items-end overflow-hidden">
								{index === 1 && (
									<motion.div initial={{width: 0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1,delay:2}}  className="rounded-xl  h-[6vw] relative bg-cover bg-[url('./ochifront.png')] "></motion.div>
								)}
								<p key={index} className="uppercase  text-[140px] font-['Test_Founders_Grotesk_X-Cond_SmBd'] leading-[0.75]">
									{item}
								</p>
							</div>
						</div>
					);
				})}
				{/* <div className="masker">
          <p className="uppercase text-[140px] xl:leading-[6.75vw] sm:leading-[11vw] font-['Test_Founders_Grotesk_X-Cond_SmBd']">
            eye-opening
          </p>
        </div>
        <div className="masker">
          <p className="uppercase text-[140px] xl:leading-[6.75vw] sm:leading-[11vw] font-['Test_Founders_Grotesk_X-Cond_SmBd']">
            Presentations
          </p>
        </div> */}
			</div>

			<div className="flex items-center justify-between border-t-[1px] mt-[100px] w-full border-zinc-700 px-14 py-3 ">
				{[
					"For public and private companies",
					"From the first pitch to IPO",
				].map((item, index) => (
					<p key={index} className="text-md font-light capitalize tracking-tight leading-none ">
						{item}
					</p>
				))}
				<div className="text-sm font-light capitalize tracking-tight leading-none  flex gap-3 items-center start">
					<button className="border-2 rounded-full uppercase px-4 py-2 border-zinc-500">
						Start the project
					</button>
					<div className="border-2 rounded-full border-zinc-500 ">
						<div className="rotate-45 text-xl py-1 px-4">↑</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default front;
