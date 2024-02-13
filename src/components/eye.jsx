import React, { useEffect, useState } from "react";

function eye(props) {
  const [rotate, setrotate] = useState(0);
  const num = props.num;
  
  useEffect(() => {
    window.addEventListener(
      "mousemove",
      (e) => {
        let x = e.clientX;
        let y = e.clientY;

        let ele = document.getElementsByClassName("line")[num];
        let rec = ele.getBoundingClientRect();
        //   //   console.log(rec);
        let myX = Math.round(rec.left)+(rec.width/2)+20 ; // added 20 to prevent weird behavior
        let myY = Math.round(rec.top)+(rec.height/2) +20 ; // added 20 to prevent weird behavior

        let deltaX = myX - x; //  my own exact logic
        let deltaY = myY - y;

        // console.log("myX "+myX+" x "+x);
        // console.log("myY "+myY+" y "+y);

        // let deltaX = x - window.innerWidth / 2;
        // let deltaY = y - window.innerHeight / 2;
        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setrotate((360 + Math.round(angle)) % 360);
          // setrotate(angle-180);
      },
      []
    );
  });
  return (
    <>
      <div className="w-[13vw] h-[13vw] rounded-full  bg-white  flex items-center justify-center">
        <div>
          <div className="bg-zinc-900 uppercase w-[8.3vw] h-[8.3vw] text-xl relative rounded-full font-['Neue_Montreal']  flex justify-center items-center ">
            <p>{props.text}</p>
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg) `,
                transition: `all 150 ease `,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-3xl w-full h-10 flex items-center"
            >
              <div className="w-4 h-4 m-1 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default eye;
