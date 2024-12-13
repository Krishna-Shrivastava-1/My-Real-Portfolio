import React, { useEffect, useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(true); // Track scroll direction
    const [lastScrollY, setLastScrollY] = useState(30); // Store last scroll position

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setIsScrollingUp(false);
            } else {
                // Scrolling up
                setIsScrollingUp(true);
            }
            setLastScrollY(window.scrollY);
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    return (
        <div>
            <div className={`w-full h-auto p-2 bg-black backdrop-blur-lg bg-opacity-30 flex items-center z-50 transition-all duration-300 justify-around ${isScrollingUp ? 'top-0' : '-top-20'} fixed rounded-b-2xl`}>
                <div className='cursor-pointer select-none' >
                    <h1 className='text-xl font-bold text-white' >Kri$h</h1>
                </div>
                <div className='text-2xl flex gap-2' >
                    <a href="https://www.linkedin.com/in/krishna-shrivastava-62b72129a/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='cursor-pointer select-none hover:scale-110 transition-all duration-200 ' /></a>
                    <a href="https://x.com/Krishrinastava" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter className='cursor-pointer select-none hover:scale-110 transition-all duration-200 ' /></a>
                    <a href="https://github.com/Krishna-Shrivastava-1" target="_blank" rel="noopener noreferrer"> <FaGithub className='cursor-pointer select-none hover:scale-110 transition-all duration-200 ' /></a>

                    <FaInstagram className='cursor-pointer select-none hover:scale-110 transition-all duration-200 ' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
