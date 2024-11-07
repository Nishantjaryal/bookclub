import Link from "next/link";
import React from "react";

const Advantages = () => {
  return (
    <section className="bg-white antialiased mb-16  md:py-10 ">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8 max-md:flex-center max-md:flex-col">
   

          <div className="items-center gap-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm   sm:flex max-md:text-[14px] max-md:w-[80%]">
            <a
              href="#"
              className="mb-4 flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
            >
              <img
                className="h-auto max-h-full w-full "
                src="/assets/book.png"
                alt="imac image"
              />
             
            </a>
            <Link
              href="https://www.crawshawacademy.org.uk/seecmsfile/?id=165"
              target="_blank"
              className="min-w-0 flex-1 font-medium text-gray-900 hover:underline "
            >
              Reading books may have several physical and mental benefits. These include strengthening your brain, increasing your ability to empathize, reducing stress, and building your vocabulary, among others.
            </Link>
          </div>

          <ol className="relative border-s border-gray-200 max-md:w-[80%]">
            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white  ">
                <svg
                  className="h-3 w-3 text--800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              
              <h3 className="mb-0.5 mt-2 text-lg font-semibold ">
              Mental Stimulation
              </h3>
              <p className="text-base font-normal max-md:text-[14px]">
              Studies have shown that staying mentally stimulated can slow the progress of (or possibly
even prevent) Alzheimer’s and Dementia, since keeping your brain active and engaged
prevents it from losing power.
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white  ">
                <svg
                  className="h-3 w-3 text-blue-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              
              <h3 className="mb-0.5 mt-2 text-lg font-semibold ">
              Stress Reduction
              </h3>
              <p className="text-base font-normal max-md:text-[14px]">
              No matter how much stress you have at school, in your personal relationships, or countless
other issues faced in daily life, it all just slips away when you lose yourself in a great story. A
well-written novel can transport you to other realms.
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white  ">
                <svg
                  className="h-3 w-3 text-blue-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              
              <h3 className="mb-0.5 mt-2 text-lg font-semibold ">
              Knowledge
              </h3>
              <p className="text-base font-normal max-md:text-[14px]">
              Everything you read fills your head with new bits of information, and you never know when it
might come in handy. The more knowledge you have, the better-equipped you are to tackle
any challenge you’ll ever face.
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white  ">
                <svg
                  className="h-3 w-3 text-blue-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              
              <h3 className="mb-0.5 mt-2 text-lg font-semibold ">
              Vocabulary Expansion
              </h3>
              <p className="text-base font-normal max-md:text-[14px]">
              The more you read, the more words you gain exposure to, and they’ll inevitably make their
way into your everyday vocabulary
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white  ">
                <svg
                  className="h-3 w-3 text-blue-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              
              <h3 className="mb-0.5 mt-2 text-lg font-semibold ">
              Memory Improvement
              </h3>
              <p className="text-base font-normal max-md:text-[14px]">
              When you read a book, you have to remember an assortment of characters, their
backgrounds, ambitions, history, and nuances, as well as the various arcs and sub-plots that
weave their way through every story. That’s a fair bit to remember, but brains are marvellous
things and can remember these things with relative ease
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white  ">
                <svg
                  className="h-3 w-3 text-blue-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              
              <h3 className="mb-0.5 mt-2 text-lg font-semibold ">
              Stronger Analytical Thinking Skills
              </h3>
              <p className="text-base font-normal max-md:text-[14px]">
              Have you ever read an amazing mystery novel, and solved the mystery yourself before
finishing the book? If so, you were able to put critical and analytical thinking to work by taking
note of all the details provided and sorting them out to determine
              </p>
            </li>

            
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
