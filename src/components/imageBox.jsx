import React from "react";

function imageBox({ imgLink, name }) {

  return (
    <div className="w-full ">
      <div className="text-sm font-['Neue_Montreal'] z-10  flex gap-3 m-3 items-center">
        <div className="w-2 h-2 rounded-full bg-zinc-100"></div> {name}
      </div>
      <div className="card  h-[75vh] rounded-2xl overflow-hidden  group hover:scale-[0.97] transition ease-in duration-300 border-zinc-300 border-[0.1px]">
        <img
          className="rounded-2xl group-hover:scale-110 transition ease-in-out duration-700 overflow-hidden"
          src={imgLink}
          alt={name}
        />
      </div>
     
    </div>
  );
}

export default imageBox;
