import Image from 'next/image'
import React from 'react'


const page = () => {
  const items =[
   <div className='border-2 shadow-lg flex flex-col items-center gap-5 bg-white'>
      <h2 className='font-bold text-2xl pt-3'>Woman Gown</h2>
      <button className='text-xl text-orange-500'>price <span className='text-black'>$:30</span></button>
      <Image
        src={'/asset6.png'}
        alt='logo'
        width={500}
        height={500}
        className='w-56 h-56'
      />
      <button className='grid grid-cols-2 justify-between p-4 w-full text-lg text-orange-500'>Buy now <span className='text-black'>See more</span> </button>,
   </div>,
   <div className='border-2 shadow-lg flex flex-col items-center gap-5 bg-white'>

      <h2 className='font-bold text-2xl pt-3'>Man T-shirt</h2>
      <button className='text-xl text-orange-500'>price <span className='text-black'>$:30</span></button>
      <Image
        src={'/asset4.png'}
        alt='logo'
        width={500}
        height={500}
        className='w-56 h-56'
      />
      <button className='grid grid-cols-2 justify-between p-4 w-full text-lg text-orange-500'>Buy now <span className='text-black'>See more</span> </button>,
   </div>, 
   <div className='border-2 shadow-lg flex flex-col items-center gap-5 bg-white'>
        <h2 className='font-bold text-2xl pt-3'>Man shirt</h2>
        <button className='text-xl text-orange-500'>price <span className='text-black'>$:30</span></button>
        <Image
          src={'/asset5.png'}
          alt='logo'
          width={500}
          height={500}
          className='w-56 h-56'
          />
        <button className='grid grid-cols-2 justify-between p-4 w-full text-lg text-orange-500'>Buy now <span className='text-black'>See more</span> </button>,
   </div>,
   <div className='border-2 shadow-lg flex flex-col items-center gap-5 bg-white'>
          <h2 className='font-bold text-2xl pt-3'>Laptop</h2>
          <button className='text-xl text-orange-500'>price <span className='text-black'>$:30</span></button>
          <Image
            src={'/asset7.png'}
            alt='logo'
            width={500}
            height={500}
            className='w-56 h-56'
            />
          <button className='grid grid-cols-2 justify-between p-4 w-full text-lg text-orange-500'>Buy now <span className='text-black'>See more</span> </button>,
   </div>]
  
  return (
    <main className=' gird bg-gray-200 p-8  gap-5 grid grid-cols-4 justify-between items-center  '>
        
          {
            items.map((item,index ) => (
              <div key={index}>{item} </div>
            ))
          }


      
    </main>
  )
}

export default page