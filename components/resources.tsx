import React from 'react'
// import Down from './Down'
import { resourcesData } from '@/constants/constants'
import Link from 'next/link'


const resources = () => {
  return (
    <section className="bg-white py-20 min-h-screen">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

        {/* <Down /> */}
    
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{resourcesData.heading}</h2>
          <p className="text-gray-500 sm:text-xl text-[14px] md:text-[16px]">{resourcesData.description}</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {
            resourcesData.posts.map((post,index)=>(
                <div key={index} >
              <div className="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-super lg:h-12 lg:w-12 ">
              {post.state === "pdf" && (
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-160h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Z"/></svg>                   )}
              {post.state === "zip" && (
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M640-480v-80h80v80h-80Zm0 80h-80v-80h80v80Zm0 80v-80h80v80h-80ZM447-640l-80-80H160v480h400v-80h80v80h160v-400H640v80h-80v-80H447ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80v-480 480Z"/></svg>                )}
              {post.state === "docs" && (
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M320-453.33h320V-520H320v66.67Zm0 120h320V-400H320v66.67Zm0 120h200V-280H320v66.67ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H574l226 226v507.33q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm314-542.67v-190.66h-314v666.66h506.66v-476H540.67Zm-314-190.66v190.66-190.66 666.66-666.66Z"/></svg>                )}
              {post.state === "post" && (
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66ZM363-310l117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z"/></svg>                )}
              {post.state === "link" && (
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M327.33-242Q224-242 152-314.45 80-386.9 80-490.12 80-593.33 152-666t175.33-72.67H704q73.33 0 124.67 51.84Q880-635 880-562t-51.33 124.83Q777.33-385.33 704-385.33H347.33q-43.33 0-74-30.67-30.66-30.67-30.66-74.33 0-43.67 30.45-74.34 30.44-30.66 74.21-30.66h370v66.66h-370q-15.66 0-26.83 11.17-11.17 11.17-11.17 27.59 0 16.43 11.17 27.17Q331.67-452 347.33-452H704q46-.33 77.67-32.17 31.66-31.83 31.66-77.97t-31.7-78Q749.92-672 704-672H327.33q-75.66-.33-128.16 52.98-52.5 53.31-52.5 129.02 0 75.28 52.5 127.97 52.5 52.7 128.16 53.36h390V-242h-390Z"/></svg>                )}
              {post.state === "news" && (
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M146.67-120q-27.5 0-47.09-19.58Q80-159.17 80-186.67V-840l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v653.33q0 27.5-19.58 47.09Q840.83-120 813.33-120H146.67Zm0-66.67h300v-266.66h-300v266.66Zm366.66 0h300v-100h-300v100Zm0-166.66h300v-100h-300v100ZM146.67-520h666.66v-120H146.67v120Z"/></svg>                )}
              {post.state === "media" && (
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-426.66q0-27 19.83-46.84Q119.67-640 146.67-640h666.66q27 0 46.84 19.83Q880-600.33 880-573.33v426.66q0 27-19.83 46.84Q840.33-80 813.33-80H146.67Zm0-66.67h666.66v-426.66H146.67v426.66Zm258-60.66L632-360 404.67-512v304.67Zm-252-486V-760h654.66v66.67H152.67Zm127.33-120V-880h400v66.67H280ZM146.67-146.67v-426.66 426.66Z"/></svg>                )}
              </div>
              <h3 className="mb-2 text-xl font-bold">{post.heading}</h3>
              <p className="text-gray-500 mb-2 text-[14px] md:text-[16px] ">{post.description}</p>
              <Link href={post.link} target='_blank' className='text-primary underline-offset-4  hover:underline font-semibold flex-center gap-1 w-[100px]'>  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="23px" fill="#625CD9"><path d="m98-537 168-168q14-14 33-20t39-2l68.67 13Q352-651.33 319-597t-62 128.33L98-537Zm203 89.67q25.67-72.67 66.17-137Q407.67-648.67 461-702q88-88 201-131.5T873-860q17 98-26 211T716-448q-53 53-118 93.83-65 40.84-137.67 66.5L301-447.33Zm282.67-123.34q21 21 51.83 21t51.83-21q21-21 21-51.83t-21-51.83q-21-21-51.83-21t-51.83 21q-21 21-21 51.83t21 51.83ZM551-85l-69.33-159q74-29 128.5-62t117.16-87.67L740-325q4 20-2 39.5T718-252L551-85ZM162-318q35-35 85-35.5t85 34.5q35 35 35 85t-35 85q-25.67 25.67-81.83 43Q194-88.67 87-74q14.67-107 32-162.67 17.33-55.66 43-81.33Z"/></svg> Take me </Link>
          </div>
            ))
          }
          {/* <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-duper lg:h-12 lg:w-12">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Legal</h3>
              <p className="text-gray-500">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-duper lg:h-12 lg:w-12 ">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
              </div>
              <h3 className="mb-2 text-xl font-bold ">Business Automation</h3>
              <p className="text-gray-500 ">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-duper lg:h-12 lg:w-12 ">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold ">Finance</h3>
              <p className="text-gray-500 ">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-duper lg:h-12 lg:w-12">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Enterprise Design</h3>
              <p className="text-gray-500">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-duper lg:h-12 lg:w-12 ">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Operations</h3>
              <p className="text-gray-500">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
          </div> */}
      </div>
  </div>
</section>
  )
}

export default resources
