import React from 'react'
import Home from '@/components/Homepage'
import Why from '@/components/Why'
import Quotes from '@/components/quotes'
import Footer from '@/components/footer'
import Pros from '@/components/Pros'

const page = () => {
  return (
    <div>
      <Home/>
      <Why />
      <Quotes />
      <Pros />
      <Footer />
    </div>
  )
}

export default page
