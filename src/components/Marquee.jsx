import React from "react";

function Marquee() {
	return (
		<div className="z-[2] w-full py-16 rounded-2xl bg-[#004D43] ">
			<div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
				<h1 className='text-[17vw] leading-none font-["Test_Founders_Grotesk_X-Cond_SmBd"] -mb-12 uppercase'>
					we are ochi!
				</h1>
				<h1 className='text-[17vw] leading-none font-["Test_Founders_Grotesk_X-Cond_SmBd"]-mb-12 uppercase'>
					we are ochi!
				</h1>
			</div>
		</div>
	);
}

export default Marquee;
