import React from 'react'
import { useEffect, useState } from 'react'

function Eyes() {
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
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] '>
        <div className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] flex gap-10 ">
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
  )
}

export default Eyes
