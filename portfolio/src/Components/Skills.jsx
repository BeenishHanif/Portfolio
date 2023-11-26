import React from "react";

const Skills = () => {
  return (
    <div id="skills">
    <div className="flex gap-1 pt-20 pl-20">
    <div className="w-2 h-8 bg-green-600"></div>
    <h1 className="text-white font-bold  text-2xl">Skills</h1>
  </div>
    <div className="grid grid-cols-2 grid-row-4 md:grid-cols-4 md:grid-rows-2 gap-8 p-20 font-semibold">
      <div className="text-white p-2 flex flex-col gap-3 justify-center items-center">
        <div className="h-20 w-20 border-8 rounded-full p-5 border-gray-500 border-solid  border-t-green-600 border-r-green-600 border-b-green-600">
          <h1>85%</h1>
        </div>
        <h1 >HTML</h1>
      </div>
      <div className="text-white p-2 flex flex-col gap-3 justify-center items-center">
        <div className="h-20 w-20 border-8 rounded-full p-5 border-gray-500 border-solid border-t-green-600  border-r-green-600 border-b-green-600">
          <h1>80%</h1>
        </div>
        <h1>CSS</h1>
      </div>
      <div className="text-white p-2 flex flex-col gap-3 justify-center items-center">
        <div className="h-20 w-20 border-8 rounded-full p-5 border-gray-500 border-solid border-t-green-600 border-r-green-600">
          <h1>65%</h1>
        </div>
        <h1 >JAVASCRIPT</h1>
      </div>
      <div className="text-white p-2 flex flex-col gap-3 justify-center items-center">
        <div className="h-20 w-20 border-8 rounded-full p-5 border-gray-500 border-solid border-t-green-600 border-r-green-600">
          <h1>70%</h1>
        </div>
        <h1 >REACT</h1>
      </div>
      <div className="text-white p-2 flex flex-col gap-3 justify-center items-center">
        <div className="h-20 w-20 border-8 rounded-full p-5 border-gray-500 border-solid border-t-green-600 border-r-green-600 ">
          <h1>50%</h1>
        </div>
        <h1 >SQL</h1>
      </div>
      <div className="text-white p-2 flex flex-col gap-3 justify-center items-center">
        <div className="h-20 w-20 border-8 rounded-full p-5 border-gray-500 border-solid border-t-green-600 border-r-green-600 border-b-green-600">
          <h1>75%</h1>
        </div>
        <h1 >C++</h1>
      </div>
      <div className="text-white p-2 flex flex-col gap-3 justify-center items-center">
        <div className="h-20 w-20 border-8 rounded-full p-5 border-gray-500 border-solid border-t-green-600">
          <h1>50%</h1>
        </div>
        <h1 >NODEJS</h1>
      </div>
      <div className="text-white p-2 flex flex-col gap-3 justify-center items-center">
        <div className="h-20 w-20 border-8 rounded-full p-5 border-gray-500 border-solid border-t-green-600 border-r-green-600">
          <h1>75%</h1>
        </div>
        <h1 >JAVA</h1>
      </div>
    </div>
    </div>
  );
};

export default Skills;
