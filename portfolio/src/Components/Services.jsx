import React from 'react'
import {  RiComputerLine } from "react-icons/ri";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { FaMicrosoft, FaMobileAlt, FaRocket } from 'react-icons/fa';
import { MdPhotoCamera } from 'react-icons/md';

const Services = () => {
  return (
    <div>
 <div className="flex gap-1 pt-20 pl-20">
    <div className="w-2 h-8 bg-green-600"></div>
    <h1 className="text-white font-bold  text-2xl">Services</h1>
  </div>
  <div className='grid  md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-10 px-20 py-12 font-semibold'>
  <div className="text-white relative p-8 border-l-4 border-solid border-green-600">
 <div className='h-10 w-10 bg-green-600 -left-3 flex justify-center items-center absolute'>
  <RiComputerLine color='white' />
  </div>
  <div className='font-bold mb-7 font-xl'>
  <h5 className='text-green-600'>01</h5>
  <h1>Web Design</h1>
  </div>
  <p className='leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam ullam harum libero tempore dolor maxime voluptatum,.</p>
</div>

<div className="text-white relative p-8 border-l-4 border-solid border-green-600">
 <div className='h-10 w-10 bg-green-600 -left-3 flex justify-center items-center absolute'>
  <HiMiniCodeBracket color='white' />
  </div>
  <div className='font-bold mb-7 font-xl'>
  <h5 className='text-green-600'>02</h5>
  <h1>Web Development</h1>
  </div>
  <p className='leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam ullam harum libero tempore dolor maxime voluptatum,.</p>
</div>
<div className="text-white relative p-8 border-l-4 border-solid border-green-600">
 <div className='h-10 w-10 bg-green-600 -left-3 flex justify-center items-center absolute'>
  <FaMobileAlt color='white' />
  </div>
  <div className='font-bold mb-7 font-xl'>
  <h5 className='text-green-600'>03</h5>
  <h1>Mobile Apps</h1>
  </div>
  <p className='leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam ullam harum libero tempore dolor maxime voluptatum,.</p>
</div>
<div className="text-white relative p-8 border-l-4 border-solid border-green-600">
 <div className='h-10 w-10 bg-green-600 -left-3 flex justify-center items-center absolute'>
 <MdPhotoCamera color='white' />
  </div>
  <div className='font-bold mb-7 font-xl'>
  <h5 className='text-green-600'>04</h5>
  <h1>Photography</h1>
  </div>
  <p className='leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam ullam harum libero tempore dolor maxime voluptatum,.</p>
</div>
<div className="text-white relative p-8 border-l-4 border-solid border-green-600">
 <div className='h-10 w-10 bg-green-600 -left-3 flex justify-center items-center absolute'>
  <FaMicrosoft color='white' />
  </div>
  <div className='font-bold mb-7 font-xl'>
  <h5 className='text-green-600'>05</h5>
  <h1>Ms Office</h1>
  </div>
  <p className='leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam ullam harum libero tempore dolor maxime voluptatum,.</p>
</div>
<div className="text-white relative p-8 border-l-4 border-solid border-green-600">
 <div className='h-10 w-10 bg-green-600 -left-3 flex justify-center items-center absolute'>
  <FaRocket color='white' />
  </div>
  <div className='font-bold mb-7 font-xl'>
  <h5 className='text-green-600'>06</h5>
  <h1>Branding</h1>
  </div>
  <p className='leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quisquam ullam harum libero tempore dolor maxime voluptatum,.</p>
</div>

  </div>

    </div>
  )
}

export default Services