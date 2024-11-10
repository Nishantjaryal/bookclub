"use client";
import React from "react";
import { contactHeaders } from "@/constants/constants";
import Link from "next/link";

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
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          {contactHeaders.heading}
        </h2>
        <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 sm:text-xl">
          {contactHeaders.description}
        </p>
        <form name="contact" method="post" netlify>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mb-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 mb-5 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <div className="flex items-baseline gap-6">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Send message
            </button>
            <Link
              target="_blank"
              className="text-primary underline-offset-4 hover:underline"
              href="mailto:nishantjaryal24@gmail.com"
            >
              Mail Us
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
