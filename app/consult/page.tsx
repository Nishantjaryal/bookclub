import React from "react";

const page = () => {
  return (
    <div className="h-screen flex-center flex-col">
      <div className="flex flex-col p-3 items-center bg-white border border-gray-200 rounded-lg shadow-md lg:flex-row w-[90%] lg:max-w-xl ">
        <img src="/assets/nsqr.jpg" className="w-[180px]" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Nishant Jaryal
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            Ping a message, to become a part of our Bookclub and discuss about upcoming events
          </p>

          <a target="_blank" href="https://wa.me/qr/W77MEDT33RPON1">
            <p className="text-green-600 hover:underline underline-offset-4">
              Open WhatsApp
            </p>
          </a>
        </div>
      </div>{" "}
      <div className=" mt-6 flex rounded-lg lg:flex-row w-[90%] lg:max-w-xl  items-center max-lg:justify-center ">
        <div className="flex gap-2.5  px-3.5 py-2 rounded-[100px] shadow-md border border-gray-200 ">
          <a target="_blank" href="https://wa.me/qr/W77MEDT33RPON1">
            <img
              className="hover:scale-[1.1] duration-100"
              src="/icons/what.png"
              width={32}
              height={32}
            />
          </a>
          <a
            target="_blank"
            href="https://www.snapchat.com/add/nsjaryal2222?share_id=Kl5osVQ1Q5s&locale=en-US"
          >
            <img
              className="hover:scale-[1.1] duration-100"
              src="/icons/snap.png"
              width={32}
              height={32}
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/_nishant.jaryal/">
            <img
              className="hover:scale-[1.1] duration-100"
              src="/icons/inst.png"
              width={32}
              height={32}
            />
          </a>
          <a target="_blank" href="https://t.me/+917986349492">
            <img
              className="hover:scale-[1.1] duration-100"
              src="/icons/tele.png"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
