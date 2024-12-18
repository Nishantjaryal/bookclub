import Link from "next/link";
import React from "react";

interface Props{
    imgscr: string;
    header: string;
    description: string;
    next:string;
    nextlink:string;
}



const Payfile = ({imgscr,header,description,next,nextlink}:Props) => {
  return (
    <div className="h-screen flex-center lg:bg-blue-50">
      <div className="flex flex-col p-3 items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row w-[90%] md:max-w-xl ">
        <img src={imgscr} className="w-[180px]" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {header}
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            {description} 
          </p>
          <Link href={nextlink} className=" w-20 text-lg mt-2 font-medium text-green-600">{next}</Link>
        </div>
      </div>
    </div>
  );
};

export default Payfile;
