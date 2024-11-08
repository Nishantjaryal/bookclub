import React from "react";
import { why } from "@/constants/constants";
const Why = () => {
  return (
    <div className=" max-md:py-20 lg:h-screen w-full bg-white flex justify-between items-center overflow-hidden">
      <div className=" max-lg:hidden md:w-[50%] ">
        <img src={why.image} className="max-lg:hidden" />
      </div>

      <div className="w-[100%] lg:w-[50%] flex-center max-lg:py-10 ">
        <div className=" md:w-[60%] flex-center flex-col gap-5 max-md:gap-10 text-primary">
          <h1 className="text-[30px] leading-[35px] md:leading-[45px] md:text-[40px] font-serif flex-center my-font max-md:w-[80%] md:font-semibold">
            {why.heading}
          </h1>
            <ul className="flex flex-col p-5 gap-1 max-md:w-[80%]">
                 {
            why.points.map((point,id)=>(
                <li key={id} className="list-disc text-lg sans-light max-md:text-[17px] ">{point}</li>
            ))
          }
            </ul>
         

        </div>
      </div>
    </div>
  );
};

export default Why;
