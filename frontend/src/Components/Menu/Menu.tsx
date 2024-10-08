"use client"
import React, { useState } from 'react'
import menu from './menu.png'
import { Link } from 'react-router-dom'

interface Props {}

const Menu = (props: Props) => {
    const [open, SetOpen] = useState(false);

    const handleLinkClick = () => {
        SetOpen(false); // Closes the menu when a link is clicked
    };

    return (
        <div className='flex flex-row'>
            <img 
                alt='Richard-Mucene-DevOps-Engineer-Johannesburg'
                src={menu} 
                width={28} height={28} 
                className='cursor-pointer'
                onClick={() => SetOpen(prev => !prev)} 
            />
            {open && (
                <div className='absolute bg-gray-800 text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
                    <Link to="/" onClick={handleLinkClick}>Home</Link>
                    <Link to="/resume/" onClick={handleLinkClick}>Resume</Link>
                    <Link to="/dashboard" onClick={handleLinkClick}>Dashboard</Link>
                    <Link to="/search" onClick={handleLinkClick}>Search</Link>
                    <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
                    <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                   
                </div>
            )}
        </div>
    );
}

export default Menu;
