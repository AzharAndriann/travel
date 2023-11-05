import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Camp</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Jeep</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1590048783699-fd19f2ce27b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SmVlcCUyMGJyb21vfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="/" />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Hiking</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1565619109666-b8bfe0e95ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcCUyMGJyb21vfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="/" />
      </div>
    </div>
  )
}

export default Activities
