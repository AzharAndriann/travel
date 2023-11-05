import React from 'react'

const Gallery = () => {
  return (
    <div id='galery' className='max-w-[1140px] m-auto w-ful px-4 py-16'> 
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1571687949921-1306bfb24b72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1505966309334-54eb8f9e3c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJvbW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1589277683134-e0fc4231addf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyb21vfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1511710348138-74156045269f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyb21vfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Gallery
