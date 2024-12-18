import React from 'react'
import { convertSheet } from '@/constants/constants'
import Link from 'next/link'
const Converter = () => {
  return (
    <div className='py-20 text-white bg-gradient-to-r from-primary to-secondary flex-center flex-col gap-5'>
      <h1 className='text-5xl my-font font-medium w-[50%] leading-[50px] max-md:text-[35px] max-md:leading-[40px]  max-md:w-[70%] '>{convertSheet.title}</h1>
      <div className=" flex gap-5 pt-3  w-[50%] max-md:flex-col max-md:w-[70%] ">
            <Link href={convertSheet.buttonLink1}>
              <button className="flex gap-2 px-5 py-3 bg-white text-primary rounded-md hover:bg-slate-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#4B44E3"
                >
                  <path d="M80-140v-320h320v320H80Zm80-80h160v-160H160v160Zm60-340 220-360 220 360H220Zm142-80h156l-78-126-78 126ZM863-42 757-148q-21 14-45.5 21t-51.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T813-204L919-98l-56 56ZM660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-380Zm120-260Z" />
                </svg>{" "}
                {convertSheet.buttonText1}
              </button>
            </Link>

            <Link href={convertSheet.buttonLink2}>
              <button className="flex gap-2 px-5 py-3 bg-primary border-[1px] border-white text-white rounded-md hover:bg-[#4c44e359]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fff"
                >
                  <path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-480-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Zm320-400q33 0 56.5-23.5T400-640q0-33-23.5-56.5T320-720q-33 0-56.5 23.5T240-640q0 33 23.5 56.5T320-560ZM80-240h480v-32q0-11-5.5-20T540-306q-54-27-109-40.5T320-360q-56 0-111 13.5T100-306q-9 5-14.5 14T80-272v32Zm240-400Zm0 400Z" />
                </svg>

                {convertSheet.buttonText2}
              </button>
            </Link>

            
          </div>
    </div>
  )
}

export default Converter
