import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl  rounded-tr-3xl text-black '>
      <h1 className='text-[4vw] leading-[5vw] tracking-tighter font-["Neue Montreal"]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className=" w-full flex gap-5 mt-12 pt-10 border-t-[1px] border-[#a1b562]">
        <div className="w-1/2">
          <h1 className='text-[4vw]'>Our approach:</h1>
          <button className='px-10 py-6 bg-zinc-900 flex  gap-5 items-center text-white rounded-full mt-6'>READ MORE
            <div className='w-3 h-3 rounded-full bg-zinc-100'></div>
          </button>
        </div>
        <div className="rounded-3xl">
          <img src="./images/aboutimg.jpg" alt="" className='rounded-3xl' />
        </div>
      </div>
    </div>
  )
}

export default About
