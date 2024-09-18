"use client"
import React, { useState } from 'react'
import menu from './menu.png'
import { Link } from 'react-router-dom'


interface Props  {}

const Menu = (props: Props) => {
    const [open, SetOpen] = useState(false);

  return (
    <div className='flex flex-row'>
        <img alt='Richard-Mucene-DevOps-Engineer-Johannesburg'
         src={menu} 
         width={28} height={28} 
         className='cursor-pointer'
         onClick={() => SetOpen(prev=>!prev)}/>
         { open && (
          <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10'>
            <Link to={"/"}>Home</Link>
            <Link to={"/resume/"}>Resume</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
            <Link to={"/search"}>Search</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/logout"}>Logout</Link>
          </div>
         )}
    </div>
  )
}

export default Menu