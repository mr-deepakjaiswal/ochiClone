import React from 'react'
import { MdCopyright } from "react-icons/md";

function Cards() {
  return (
    <div data-scroll data-scroll-speed=".2" className='w-full h-[70vh] flex items-center gap-5 px-12'>
      <div className=' w-1/2 h-[55vh] rounded-xl bg-[#004D43] flex items-center justify-center relative'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='px-4 py-2 border-2 mt-4 rounded-full font-semibold text-xs uppercase absolute left-10 bottom-10 flex items-center gap-1 border-[#CDEA68] text-[#CDEA68]'><MdCopyright />2019-2022</button>
      </div>
      <div className=' w-1/4 h-[55vh] rounded-xl bg-[#212121] flex items-center justify-center relative'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='px-4 py-2 border-2 border-zinc-400 mt-4 rounded-full font-semibold text-xs uppercase absolute left-10 bottom-10 text-white'>rating 5.0 on clutch</button>
      </div>
      <div className='w-1/4 h-[55vh] rounded-xl bg-[#212121] flex items-center justify-center relative'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='px-4 py-2 border-2 border-zinc-400 mt-4 rounded-full font-semibold text-xs uppercase absolute left-10 bottom-10 text-white'>business bootcamp alumni</button>
      </div>
    </div>
  )
}

export default Cards