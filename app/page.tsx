import React from "react";
import Home from "@/components/Homepage";
import Why from "@/components/Why";
import Quotes from "@/components/quotes";
import Pros from "@/components/Pros";
import Converter from "@/components/Converter";
import Advantages from "@/components/Advantages";

const page = () => {
  return (
    <div>
      <Home />
      <Why />
      <Quotes />
      <div className="py-24 ">
        <Pros />
      </div>
      <Advantages />
      <Converter />
    </div>
  );
};

export default page;
