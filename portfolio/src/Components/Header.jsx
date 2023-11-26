import React, {  useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoMdClose} from "react-icons/io";

const Header = () => {
    const [openMenu,setOpenMenu]=useState(false);
   
    const toggleOpenMenu=()=>{
        setOpenMenu(!openMenu);
    }

    
  return (
    <header className={`shadow-green-500/50 z-10 shadow-2xl fixed w-full h-15 p-7 flex justify-between text-white  md:bg-black  ${openMenu ? 'bg-black ':'md:bg-black'}`}>
      <h1 className='font-mono font-bold text-xl text-green-600'>JANE SMITH</h1>
      <ul className={`gap-8 font-semibold text-white md:flex md:flex-row md:mt-0 ${openMenu ?'flex-col mt-16 gap-9 -ml-48':'hidden'}`} >
        <li className='cursor-pointer relative  before:absolute before:bottom-0 before:left-0  before:w-full before:h-1  before:bg-white before:transition-transform before:scale-x-0  before:ease-in before:duration-500 before:origin-center hover:before:left-0 before:hover:scale-x-100'>
          <a href='#' className="">HOME</a>
        </li>
        <li className='cursor-pointer relative  before:absolute before:bottom-0 before:left-0  before:w-full before:h-1  before:bg-white before:transition-transform before:scale-x-0  before:ease-in before:duration-500 before:origin-center hover:before:left-0  before:hover:scale-x-100 '>
          <a href='#about'  className="">ABOUT</a>
        </li>
        <li className='cursor-pointer relative  before:absolute before:bottom-0 before:left-0  before:w-full before:h-1  before:bg-white before:transition-transform before:scale-x-0  before:ease-in before:duration-500 before:origin-center hover:before:left-0  before:hover:scale-x-100'>
          <a href='#services'  className="">SERVICES</a>
        </li>
        <li className='cursor-pointer relative  before:absolute before:bottom-0 before:left-0  before:w-full before:h-1  before:bg-white before:transition-transform before:scale-x-0  before:ease-in before:duration-500 before:origin-center hover:before:left-0  before:hover:scale-x-100'>
          <a href='#skills'  className="">SKILLS</a>
        </li>
        <li className='cursor-pointer relative  before:absolute before:bottom-0 before:left-0  before:w-full before:h-1  before:bg-white before:transition-transform before:scale-x-0  before:ease-in before:duration-500 before:origin-center hover:before:left-0  before:hover:scale-x-100 '>
          <a href='#portfolio' className="">PORTFOLIO</a>
        </li>
        <li className='cursor-pointer relative  before:absolute before:bottom-0 before:left-0  before:w-full before:h-1  before:bg-white before:transition-transform before:scale-x-0  before:ease-in before:duration-500 before:origin-center hover:before:left-0 before:hover:scale-x-100'>
          <a href='#contact'  className="">CONTACT</a>
        </li>
      </ul>
       {!openMenu ?  <MdMenu color='white' onClick={toggleOpenMenu} size={20} className='cursor-pointer flex md:hidden' />:
        <IoMdClose color='white' size={20} onClick={toggleOpenMenu} className='cursor-pointer flex md:hidden' />}
    </header>
  );
}

export default Header;
