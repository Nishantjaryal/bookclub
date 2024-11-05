import React from 'react';
import { FAQs } from '@/constants/constants';
const Faq = () => {
  return (
    <div>
      <section className="bg-white antialiased  md:py-16 py-20">
  <div className="mx-auto max-w-screen-lg pt-20 px-4 2xl:px-0 ">
    <div className="lg:flex lg:items-center lg:justify-between lg:gap-4">
      <h2 className="shrink-0 text-xl font-semibold text-gray-900  sm:text-2xl">FAQ</h2>

      
    </div>

    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-200 ">
        
        
        
        <div className="space-y-4 py-6 md:py-8">
         
         {FAQs.list.map((faq,index)=>(
             <div key={index} className="grid gap-4">
             <div>
               <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800   md:mb-0"> Facts </span>
             </div>
 
             <a href="#" className="text-xl font-semibold text-gray-900 hover:underline ">“{faq.arguments}”</a>
             <p>{faq.fact}</p>
           </div>
         ))}
         
         
          
        </div>

        


        
      </div>
    </div>

   
  </div>
</section>


    </div>
  )
}

export default Faq
