import React from 'react'
import Hero from '../Components/Hero/Hero'

interface Props  {}

const HomePage = (props: Props) => {
  return (
    <div className='container flex flex-col min-h-screen'>
      <div className='flex-grow p4 md:p8 lg:p-12 xl:p-16'>
      <Hero/>
      </div>
       
    </div>
  )
}

export default HomePage