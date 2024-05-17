import React, { useEffect, useState } from 'react'

function Project() {

  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener("mouseover", (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    })
  })
  return (
    <div>
      <div className='w-full h-screen bg-[#CDEA68] '>
        <div className='flex items-center justify-center flex-col'>
          <div className='mt-6'>
            <h1 className='text-[11vw] font-bold leading-none uppercase tracking-tighter -mb-[2vw] flex justify-center'>ready</h1>
            <h1 className='text-[11vw] font-bold leading-none uppercase tracking-tighter -mb-[2vw] flex justify-center'>to start</h1>
            <h1 className='text-[11vw] font-bold leading-none uppercase tracking-tighter -mb-[2vw] flex justify-center'>the project?</h1>
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-y-[110%] -translate-x-[50%] flex gap-10 ">
                <div className='w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center'>
                  <div className='relative w-[10vw] h-[10vw] bg-zinc-800 rounded-full '>
                    <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className=' line w-full h-10 absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'>
                      <div className='w-[1.9vw] h-[1.9vw] bg-zinc-100 rounded-full'></div>
                    </div>
                  </div>
                </div>
                <div className='w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center'>
                  <div className='w-[10vw] h-[10vw] bg-zinc-800 rounded-full relative'>
                    <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'>
                      <div className='w-[1.9vw] h-[1.9vw] bg-zinc-100 rounded-full'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10 relative'>
            <button className='px-10 py-6 bg-zinc-900 flex  gap-5 items-center text-white rounded-full mt-6'>START THE PROJECT
              <div className='w-3 h-3 rounded-full bg-zinc-100'></div>
            </button>
            <h1 className='text-xl absolute right-1/2 top-1/2.5 translate-y-1/2 translate-x-1/2 font-semibold'>OR</h1>
            <button className='px-10 py-6 bg-[#CDEA68] flex gap-5 items-center text-black border-zinc-900 border-[1px] border-zinc-900 rounded-full mt-16'>HELLO@OCHI.DESIGE
              <div className='w-3 h-3 rounded-full bg-zinc-900'></div>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project