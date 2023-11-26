import React, { useState } from "react";

const Portfolio = () => {
const [frontend,setfrontEnd]=useState(0);

  return (
    <div id="portfolio">
      <div className="flex gap-1 pt-20 pl-20">
        <div className="w-2 h-8 bg-green-600"></div>
        <h1 className='text-white font-bold  text-2xl'>Portfolio</h1>
      </div>
      <div className="px-28 grid">
        <ul className="flex py-10 justify-self-center  gap-8 ">
          <li onClick={()=>setfrontEnd(0)}
            className={`cursor-pointer hover:text-green-600 ${frontend==0 ? "text-green-600":" "}`}
          >
            Frontend
          </li>
          <li
          onClick={() => setfrontEnd(1)}
            className={`cursor-pointer hover:text-green-600 ${frontend==1 ? "text-green-600":" "}`}
          >
            Backend
          </li>
          <li
          onClick={() => setfrontEnd(2)
             }
            className={`cursor-pointer hover:text-green-600 ${frontend==2 ? "text-green-600":" "}`}
          >
            Photography
          </li>
        </ul>
        <div className="w-[75%] justify-self-center">
       {(frontend==0)
&&(   <div className="columns-2 gap-5 ">
    <img
  className="aspect-video rounded-lg"
  src="https://img.freepik.com/free-photo/man-sits-end-trolltunga-before-mountains_1304-5416.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"/>
<img
  className="aspect-video rounded-lg mt-5"
  src="https://img.freepik.com/free-photo/gyeongbokgung-palace-autumn-south-korea_335224-1366.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"
/>
<img
  className=" aspect-video rounded-lg"
  src="https://img.freepik.com/premium-photo/standing-clifftop-with-panoramic-view-ocean_1004780-1574.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"/>
<img
  className=" aspect-video rounded-lg mt-5"
  src="https://img.freepik.com/free-photo/beautiful-city-view_1417-1542.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"
/>
</div>         
)}
          {(frontend==1) && (<div className="columns-2 gap-5 ">
          <img
                className=" aspect-video rounded-lg"
                src="https://img.freepik.com/premium-photo/big-ben-clock-tower-london-thames-river_79295-6818.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"/>
              <img
                className=" aspect-video rounded-lg mt-5"
                src="https://img.freepik.com/free-photo/gyeongbokgung-palace-autumn-south-korea_335224-1366.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"
              />
              <img
                className=" aspect-video rounded-lg"
                src="https://img.freepik.com/free-photo/footpath-beautiful-arch-flowers-plants_181624-16890.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"/>
              <img
                className=" aspect-video rounded-lg mt-5"
                src="https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-839.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"
              />
            </div>)}
            {(frontend==2) &&
              <div className="grid grid-row-3 gap-x-4 gap-y-4 grid-flow-col">
              <img
                className="rounded-lg "
                src="https://img.freepik.com/free-photo/landscape-shot-taken-serpentine-road-tf-436-masca-spain_181624-36970.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"
              />
              <img
                className="rounded-lg aspect-[1/0.75] "
                src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"
              />
              <img
                className="rounded-lg row-span-2"
                src="https://img.freepik.com/free-photo/beautiful-landscape-with-green-grass-breathtaking-view-rainbow-storm-clouds_181624-32758.jpg?size=626&ext=jpg&ga=GA1.1.246330575.1700575932&semt=sph"
              />
            </div>
              
              }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
