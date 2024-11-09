"use client";
import React from "react";
import { contactHeaders } from "@/constants/constants";

const Contact = () => {
  return (
    <section className="flex-center bg-white gap-6 border-y-2 py-20 w-full">
      <div className="w-[40%] flex-center max-lg:hidden">
        <img
          className="max-lg:hidden"
          src="/assets/contact.webp"
          alt="contact us"
        />
      </div>
      <div className="max-md:w-[80%] py-8 lg:py-10 px-4 w-[40%] max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          {contactHeaders.heading}
        </h2>
        <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 sm:text-xl">
          {contactHeaders.description}
        </p>
       
      </div>
    </section>
  );
};

export default Contact;
