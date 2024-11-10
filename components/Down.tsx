import React from 'react'

const Down = () => {
  return (
    <section className="bg-white flex gap-6">
    <div className="py-8 px-4 mx-auto max-w-screen-md flex-center flex-col text-center lg:py-16 lg:px-12">
        <img 
        src="/assets/maintenance.svg"
        className='w-[200px] h-[200px]'
        alt='maintenance page'
        />
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl ">Under Maintenance</h1>
        <p className="font-light text-gray-500 md:text-lg xl:text-xl ">Our Enterprise administrators are performing scheduled maintenance.</p>
    </div>
</section>
  )
}

export default Down
