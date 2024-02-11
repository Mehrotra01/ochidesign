import React, { useEffect, useState } from "react";

function eye(props) {
  const [rotate, setrotate] = useState(0);
  const num = props.num;
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;

    //   let ele = document.getElementsByClassName("line")[num];
    //   let rec = ele.getBoundingClientRect();
    //   //   console.log(rec);
    //   let myX = Math.round(rec.right)-50; // added -50 to prevent weird behavior
    //   let myY = Math.round(rec.bottom)-50; // added -50 to prevent weird behavior

    //   let deltaX = myX - x; //  my own exact logic
    //   let deltaY = myY - y;

      // console.log("myX "+myX+" x "+x);
      // console.log("myY "+myY+" y "+y);

        let deltaX = x - window.innerWidth / 2;
        let deltaY = y - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle-180);
    //   setrotate(angle);
    },[]);
  });
  return (
    <>
      <div className="w-[15vw] h-[15vw] rounded-full  bg-white flex items-center justify-center">
        <div className="bg-black w-[9vw] h-[9vw] relative rounded-full flex justify-center items-center ">
          <p>Play</p>
          <div
            style={{
              transform: `translate(-50%,-50%) rotate(${rotate}deg) `,
              transition: `all ease 0s 150 `,
            }}
            className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-3xl w-full h-10 flex items-center"
          >
            <div className="w-6 h-6 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default eye;
