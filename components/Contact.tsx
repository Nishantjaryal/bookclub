'use client'
import React, { useState } from "react";
import { contactHeaders } from "@/constants/constants";
import Link from "next/link";

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to Netlify
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      setStatus('Form submitted successfully!');
    } else {
      setStatus('Submission failed, please try again.');
    }
  };

  return (
    <section className="flex-center bg-white gap-6 border-y-2 py-20 w-full">
      <div className="w-[40%] flex-center max-lg:hidden">
        <img className="max-lg:hidden" src="/assets/contact.webp" alt="contact us" />
      </div>
      <div className="max-md:w-[80%] py-8 lg:py-10 px-4 w-[40%] max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          {contactHeaders.heading}
        </h2>
        <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 sm:text-xl">
          {contactHeaders.description}
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          netlify-honeypot="bot-field"
        >
          {/* Required for Netlify to process the form */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out if you're human: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Add the name attribute
              className="mb-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@example.com"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject" // Add the name attribute
              className="block p-3 w-full text-sm text-gray-900 mb-5 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Let us know how we can help you"
              onChange={handleChange}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              id="message"
              name="message" // Add the name attribute
              rows={5}
              className="mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a comment..."
              onChange={handleChange}
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
            <Link target="_blank" className="text-primary underline-offset-4 hover:underline" href="mailto:nishantjaryal24@gmail.com">
              Mail Us
            </Link>
          </div>
          <p>{status}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
