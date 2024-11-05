import React from 'react'
import Payfile from '@/components/Payfile'

const page = () => {
  return (
    
      <Payfile imgscr='/assets/gpay.jpg' header='Scan to pay' description='Scan QR code to pay required amount and proceed for next step to get enrolled in BookScape Book Club ' next='Next Step' nextlink='/thanks' />
    
  )
}

export default page


