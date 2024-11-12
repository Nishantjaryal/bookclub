import Link from 'next/link'
import React from 'react'

const Pricing = () => {
  return (
    <section className="bg-white py-20 lg:bg-blue-50">
  <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Designed for Readers </h2>
          <p className="mb-5 font-light text-gray-500 text-[14px] sm:text-xl ">Here at BookScape we focus on efficient distribution of Reading Resources to fuel Personal Growth</p>
      </div>
      <div className="space-y-8 flex-center flex-wrap  lg:space-y-0 gap-0">
        
        <img 
        src='/assets/pay-min.webp'
        alt='payment page'
        width={600}
        height={350}
        className='max-lg:hidden'
        />
          <div className="flex flex-col p-6  max-w-[370px] text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-md mx-0 xl:p-8  ">
              <h3 className="mb-4 text-2xl font-semibold">Book Family</h3>
              <p className="font-light text-gray-500 sm:text-lg ">Best option for Getting Books, Research Papers, Short Stories and Blogs</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">₹50</span>
                  <span className="text-gray-500 ">/Sem</span>
              </div>
              
              <ul role="list" className="mb-8 space-y-4 text-left px-9">
                  <li className="flex items-center space-x-3">
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      <span>Group Discussions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      <span>Group Reading Sessions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      <span>Story Quizes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      <span>6 months Duration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      <span>Get Free Online Resources</span>
                  </li>
              </ul>
              <Link href="../consult" className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Get started</Link>
          </div>
      
      </div>
  </div>
</section>
  )
}

export default Pricing
