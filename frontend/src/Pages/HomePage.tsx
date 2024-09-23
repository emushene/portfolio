import React from 'react'
import Hero from '../Components/Hero/Hero'
import AffliliateLogos from '../Components/AffliliateLogos/AffliliateLogos'

interface Props  {}

const HomePage = (props: Props) => {
  return (
    <div className='select-none sm:mt-4 md:mt-24 w-[100%] '>
     
      <Hero/>
     <AffliliateLogos/>
       
    </div>
  )
}

export default HomePage