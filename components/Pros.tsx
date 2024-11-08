import Image from "next/image";
import React from "react";
import { pros } from "@/constants/constants";

const Pros = () => {
  return (
    <div>
      <section className="text-gray-600 body-font flex-center">
        <div className="w-[50%] flex-center max-lg:hidden">
          <img src={pros.image} alt="books" className="max-lg:hidden" />
        </div>
        <div className="w-[50%] flex flex-col gap-8 max-lg:flex-center max-lg:w-[80%]">
          <h1 className="w-[80%] my-font text-super text-5xl font-semibold leading-[50px] max-md:text-3xl max-md:font-normal ">
            {pros.heading}
          </h1>
          <div className=" flex flex-col gap-6 w-full max-lg:flex-center max-lg:w-[80%] ">
            {pros.points.map((point, index) => (
              <div key={index} className="flex gap-4 text-super max-md:flex-col max-md:w-[100%]">
                <Image src={point.img} alt="Bookclub" width={50} height={50} />
                <p className="w-[60%] max-md:w-[100%] text-[20px] max-md:text-[17px] leading-[30px] max-md:leading-[24px]">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pros;
