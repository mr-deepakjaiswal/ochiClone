import React from 'react'

function Clients() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-2 pb-16'>
        <h1 className='text-7xl font-["Neue Montreal"]'>Clients' reviews</h1>
      </div>
      <div className="clientSection w-full flex itmes-center justify-between px-10 py-6 border-b-2">
        <div className=''><h1 className='font-semibold text-lg'>Karman Ventures</h1></div>
        <div className='flex flex-col'>
          <h1 className='font-semibold text-lg'>Services:</h1>
          {["inverstor deck", "salels deck"].map((item, index) => (<button key={index} className={'px-4 py-2 border-2 border-zinc-400 mt-4 rounded-full font-semibold text-xs uppercase'}>{item}</button>))}
        </div>
        <div>
          <h1 className='font-semibold text-lg'>William Barnes</h1>
          <img className='w-[10vw] h-[19vh] mt-10 rounded-xl' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
          <p className='w-[380px] mt-10'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
        </div>
        <div><h1 className='text-zinc-300 font-semibold text-lg'>READ</h1>
        </div>
      </div>
      <div className='w-full px-10 py-6 flex itmes-center justify-between border-b-2'>
        <div><h1 className='font-semibold text-lg'>Planetly</h1></div>
        <div><h1 className='font-semibold text-lg'></h1></div>
        <div><h1 className='font-semibold text-lg'> Nina Walloch</h1></div>
        <div><h1 className='font-semibold text-lg'>READ</h1></div>
      </div>
      <div className='w-full px-10 py-6 flex itmes-center justify-between border-b-2'>
        <div><h1 className='font-semibold text-lg'>Workiz Easy</h1></div>
        <div><h1 className='font-semibold text-lg'></h1></div>
        <div><h1 className='font-semibold text-lg'>Tomer Levy</h1></div>
        <div><h1 className='font-semibold text-lg'>READ</h1></div>
      </div>
      <div className='w-full px-10 py-6 flex itmes-center justify-between border-b-2'>
        <div><h1 className='font-semibold text-lg'>Premium Blend</h1></div>
        <div><h1 className='font-semibold text-lg'></h1></div>
        <div><h1 className='font-semibold text-lg'>Ellen Kim</h1></div>
        <div><h1 className='font-semibold text-lg'>READ</h1></div>
      </div>
      <div className='w-full px-10 py-6 flex itmes-center justify-between border-b-2'>
        <div><h1 className='font-semibold text-lg'>Hypercare Systems</h1></div>
        <div><h1 className='font-semibold text-lg'></h1></div>
        <div><h1 className='font-semibold text-lg '>Brendan Goss</h1></div>
        <div><h1 className='font-semibold text-lg'>READ</h1></div>
      </div>
    </div>
  )
}

export default Clients