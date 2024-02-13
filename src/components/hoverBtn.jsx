import React from 'react'

function hoverBtn({text}) {
  return (
    <div>
        <button className=" uppercase text-base border-[1px] rounded-full px-4 py-1 font-['Neue_Montreal'] border-zinc-100 ">
              {text}
            </button>
    </div>
  )
}

export default hoverBtn