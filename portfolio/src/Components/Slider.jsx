import React from "react";

const Slider = () => {
  return (
    <div className="w-full h-[500px]">
      <div className="w-full h-full bg-center flex flex-col justify-center items-center text-white bg-[url('https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=600')]">
        <h1 className="font-bold text-lg">Hello</h1>
        <h1 className="font-bold text-lg">I'M JANE SMITH</h1>
        <div class="w-max">
          <h2 className="text-3xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 md:text-5xl text-white font-bold">
            A Freelance WEB DESIGNER
          </h2>
        </div>
        <button class="w-[6rem] relative text-lg font-serif rounded-lg flex h-[50px] mt-5 md:w-[8rem] items-center justify-center overflow-hidden bg-green-600  text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-green-600 hover:shadow-green-600 hover:before:border-[25px]">
          <span class="relative z-1">Hover me</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
