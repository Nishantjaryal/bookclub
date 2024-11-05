import React from "react";
import { why } from "@/constants/constants";
const Why = () => {
  return (
    <div className="h-screen w-full bg-white flex justify-between items-center overflow-hidden">
      <div className=" text-white flex-centerc:\Users\NISHANT JARYAL\Desktop\download-TdsysQ9NU-transformed.jpeg md:w-[50%] ">
        <img src={why.image} />
      </div>

      <div className="w-[100%] md:w-[50%] flex-center ">
        <div className="w-[80%] flex flex-col gap-5 text-primary">
          <h1 className=" leading-[45px] text-[40px] font-serif flex-center my-font font-semibold">
            {why.heading}
          </h1>
            <ul className="flex flex-col p-5 gap-1">
                 {
            why.points.map((point,id)=>(
                <li key={id} className="list-disc text-lg sans-light ">{point}</li>
            ))
          }
            </ul>
         

        </div>
      </div>
    </div>
  );
};

export default Why;
