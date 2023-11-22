import React from "react";
import image1 from "../assets/image.png";
import {  FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const About = () => {
  return (
    <>
          <div className="flex gap-1 pt-20 pl-20">
            <div className="w-2 h-8 bg-green-600"></div>
            <h1 className="text-white font-bold  text-2xl">About</h1>
          </div>
    <div className=" mt-10 px-8 md:px-20 flex">
      <div className="flex-col-reverse flex gap-12 px-10 md:px-0   md:flex-row md:items-start">
        <div className=" text-white">
          <h2 className="text-white text-xl font-semibold mt-5 ">
            I am a <span className="text-green-600">Freelancer</span>
          </h2>
          <p className="leading-5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            ipsum! Voluptatum aspernatur doloremque fugit cum commodi
            consequatur, sequi temporibus quam, asperiores obcaecati alias
            dolores unde ad placeat! Hic tenetur assumenda blanditiis sapiente
            nam optio praesentium repellat illum cumque, facere commodi.
          </p>
          <div className="flex gap-5 mt-5 font-semibold font-xl ">
            <button className="px-4 py-3 border-green-600 border-4 hover:bg-green-600">
              Hire Me
            </button>
            <button className="px-4 py-3 border-green-600 border-4 hover:bg-green-600">
              Download
            </button>
          </div>
          <div className="flex gap-7 ">
            <div className="bg-gray-500/25 max-w-xs h-40 m p-5 flex flex-col items-center justify-center mt-5 flex-1">
              <FaPhone color="green" className="text-3xl" />
              <h1 className="mt-2 whitespace-nowrap">+92 000 333 000</h1>

            </div>
            <div className="bg-gray-500/25 h-40 max-w-xs p-5  flex flex-col items-center justify-center mt-5 flex-1">
              <IoIosMail color="green" className="text-5xl" />
              <h1>Janesmith@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className=" m-auto">
          <div className="h-64 w-72 bg-green-600">
            <div className="border-4 border-white  h-64 -translate-x-9 translate-y-10">
              <img
                src={image1}
                className=" h-80 -translate-y-[6.7rem] translate-x-10 object-cover object-center"
                alt="myimage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
