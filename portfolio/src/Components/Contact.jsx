import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex gap-1 pt-20 pl-20">
        <div className="w-2 h-8 bg-green-600"></div>
        <h1 className="text-white font-bold  text-2xl">Contact Us</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 p-20">
        <h1 className="text-3xl font-bold">
          Let's Discuss Your <span className="text-green-600">Project</span>
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea
          cumque voluptates? Eos minus consequuntur fuga, natus debitis
          praesentium deleniti.
        </p>
      </div>
      <div className="grid w-max relative left-[50%] right-[50%] -translate-x-[50%] grid-cols-2 grid-flow-row place-items-center gap-4 p-20">
        <input
          className="rounded-lg p-2 text-black focus:outline-blue-600 "
          type="text"
          placeholder="Name"
        ></input>
        <input
          className="rounded-lg p-2 text-black focus:outline-blue-400 "
          type="text"
          placeholder="Your Email"
        ></input>
        <input
          className="rounded-xl p-2 text-black "
          type="text"
          placeholder="Your Email"
        ></input>
        <input
          className="rounded-xl p-2 text-black "
          type="text"
          placeholder="Your Email"
        ></input>
        <textarea placeholder="Write a message" className="rounded-xl p-2 justify-self-stretch col-span-2 text-black"></textarea>
      </div>
    </div>
  );
};

export default Contact;
