"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import MobileNav from "./mobileNav";

const Nav = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const Nav = document.getElementById("navbar");
      Nav?.classList.toggle("top-[-15%]", window.scrollY > 100);
    });
  }, []);

  return (
    <nav
      id="navbar"
      className="flex  items-center lg:flex-center justify-between bg-white fixed top-0 left-0 w-full shadow-md  duration-300	z-20 h-[72px] md:h-[80px]"
    >
      <div className="px-5 py-3">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="BookClub"
            width={150}
            height={100}
          />
        </Link>
      </div>
      <div className=" flex justify-between items-center text-md text-gray-800 transition-all w-[70%] max-lg:hidden">
        <span className="flex-center p-4  gap-7">
          <Link className="hover:text-black" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-black" href="/resources">
            Resourses
          </Link>
          <Link className="hover:text-black" href="/contact">
            Contact
          </Link>
          <Link className="hover:text-black" href="/faq">
            FAQ
          </Link>
        </span>

        <span className="flex-center p-4 gap-4 ">
        <div className="text-primary mx-2 font-normal w-[50px]" >
          <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
        

          <Link href="/membership">
            <span className="flex-center gap-2 px-6 py-2 color-button rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
              </svg>
              Join
            </span>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Nishantjaryal/bookclub"
          >
            <span className="flex-center gap-2 px-6 py-2 light-button rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#4B44E3"
              >
                <path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
              </svg>
              Contribute
            </span>
          </Link>

            
        </span>
      </div>

      {/* mobile */}
      <div className="flex flex-col gap-5 p-2">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
