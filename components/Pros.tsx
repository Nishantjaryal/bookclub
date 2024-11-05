import Image from "next/image";
import React from "react";
import { pros } from "@/constants/constants";

const Pros = () => {
  return (
    <div>
      <section className="text-gray-600 body-font flex-center">
        <div className="w-[50%] flex-center">
          <img src={pros.image} alt="books" />
        </div>
        <div className="w-[50%] flex flex-col gap-8 ">
          <h1 className="w-[80%] my-font text-super text-5xl font-semibold leading-[50px]">
            {pros.heading}
          </h1>
          <div className=" flex flex-col gap-6 w-full">
            {pros.points.map((point, index) => (
              <div key={index} className="flex gap-4 text-super">
                <Image src={point.img} alt="Bookclub" width={50} height={50} />
                <p className="w-[60%] text-[20px] leading-[30px]">
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
