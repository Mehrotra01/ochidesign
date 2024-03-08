import React, { useState } from "react";
import Fyde from "../assets/fyde.png";
import HoverBtn from "./HoverBtn";
import ImageBox from "./ImageBox";
import vise from "../assets/Vise_front.jpg";

function gallery() {
  const [str, setStr] = useState("");

  return (
    <div className="cards flex gap-10 p-14 relative">
      <div
        className={`w-1/2 peer/vise`}
        onMouseEnter={() => setStr("FYDE")}
        onMouseLeave={() => setStr("")}
      >
        <ImageBox name="FYDE" imgLink={Fyde} />
        <div className="flex my-5 gap-4">
          <HoverBtn text="Audit" />
          <HoverBtn text="CopyWriting" />
          <HoverBtn text="Sales deck" />
          <HoverBtn text="Slide design" />
        </div>
      </div>

      <div
        className={`w-1/2 peer/fyde`}
        onMouseEnter={() => setStr("VISE")}
        onMouseLeave={() => setStr("")}
      >
        <ImageBox name="VISE" imgLink={vise} />
        <div className="flex my-5 gap-4">
          <HoverBtn text="Agency" />
          <HoverBtn text="Company presenetation" />
        </div>
      </div>
      <span className="absolute hidden peer-hover/fyde:flex peer-hover/vise:flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-0">
        <p className="text-9xl font-['Test_Founders_Grotesk_X-Cond_SmBd'] text-[#CDEA68]">
          {str}
        </p>
      </span>
    </div>
  );
}

export default gallery;
