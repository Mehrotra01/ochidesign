import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  
  return (
    <div 
    data-scroll
    data-scroll-section
    data-scroll-speed=".1"
     className=" z-30 w-full h-[60vh] py-12 rounded-t-2xl bg-[#004D43] ">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden pr-10">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat: Infinity,ease:"linear",duration:10}} className='text-[24vw] -mt-[3.5vw] leading-none font-["Test_Founders_Grotesk_X-Cond_SmBd"] uppercase'>
          we are ochi!
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear",duration:10}} className='text-[24vw] -mt-[3.5vw] leading-none font-["Test_Founders_Grotesk_X-Cond_SmBd"] uppercase'>
          we are ochi!
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
