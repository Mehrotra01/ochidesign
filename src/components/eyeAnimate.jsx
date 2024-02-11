import React from "react";
import Eye from './eye';

function eyeAnimate() {
  return (
    <div className="eyes w-screen h-screen">
      <div className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] relative bg-cover'>
        <div className="absolute  w-1/2 h-64 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[80%] flex justify-center">
          <Eye num={0}/>
          <Eye num={1}/>
        </div>
      </div>
    </div>
  );
}

export default eyeAnimate;
