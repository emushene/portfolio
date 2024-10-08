import React from 'react'
import Hero from '../Components/Hero/Hero'
import AffliliateLogos from '../Components/AffliliateLogos/AffliliateLogos'

interface Props  {}

const HomePage = (props: Props) => {
  return (
    <div className='w-full'>
     
      <Hero/>
     <AffliliateLogos/>
       
    </div>
  )
}

export default HomePage