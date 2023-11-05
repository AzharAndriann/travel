import React from 'react'

const Booking = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
      <form className='lg:flex lg:justify-between w-full items-center'>
        <div className='flex flex-col my-2 py-2'>
            <label>Destination</label>
            <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                <option>Trip 1</option>
                <option>Trip 2</option>
                <option>Trip 3</option>
                <option>Trip 4</option>
            </select>
        </div>
        <div className='flex w-full'> 
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Chek-In</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Chek-Out</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
        </div>
        <div className='flex flex-col my-2 p-2 w-full'>
            <label>Seacrh</label>
            <button>Rates & Availabilities</button>
        </div>
      </form>
    </div>
  )
}

export default Booking
