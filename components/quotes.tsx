"use client";

import { useEffect, useState } from "react";
import { quotes } from "@/constants/constants";
import Image from "next/image";

function getNo() {
  return Math.floor(Math.random() * quotes.length);
}

const Quotes = () => {
  const [index, setIndex] = useState(getNo());
  const [myquote, setQuote] = useState(quotes[index].quote);
  const [myauthor, setAuthor] = useState(quotes[index].author);

  useEffect(() => { 
    // useEffect initializes and manages the interval to update quotes every 5 seconds.
    const interval = setInterval(() => {
      const newIndex = getNo();
      setIndex(newIndex);
      setQuote(quotes[newIndex].quote);
      setAuthor(quotes[newIndex].author);
    }, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
    // clearInterval(interval) ensures the interval is cleared on component unmount, preventing potential memory leaks.
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-super to-duper flex-center relative text-white  max-md:py-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-[60%] lg:w-3/4 w-full mx-auto text-center">
        <div className="flex-center gap-2 ">
            <p className="text-[75px] max-md:hidden">“</p>
            <p className=" text-[35px]  max-md:text-[25px] my-font leading-[35px]">{myquote}</p>
            <p className="text-[75px] gap-2 max-md:hidden">”</p>
        </div>
          
          <span className="inline-block h-1 w-10 rounded bg-white mt-1 mb-6 max-md:my-7"></span>
          <h2 className=" font-medium title-font tracking-wider text-sm">
            {myauthor}
          </h2>
        </div>
      </div>
      <Image src="/assets/chat.png" alt="quotes" className="absolute bottom-10 left-10 max-md:hidden" width={100} height={100} />
    </section>
  );
};

export default Quotes;

