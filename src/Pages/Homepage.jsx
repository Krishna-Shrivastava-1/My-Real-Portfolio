import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Aboutsection from '../Components/Aboutsection.jsx'
import Technologies from '../Components/Technologies.jsx'
import Projectsection from '../Components/Projectsection.jsx'
import Formsubmer from '../Components/Formsubmer.jsx'
import Footer from '../Components/Footer.jsx'
import mehe from '../assets/meport.jpg'
import { motion } from 'framer-motion'
import Education from '../Components/Education.jsx'
const Homepage = () => {

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='flex items-center justify-around p-2 flex-wrap md:flex-nowrap mt-8 h-screen' >
                <div className='w-[100%] mx-3 overflow-hidden' >
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}

                        className='text-white text-5xl text-balance font-thin my-2 mb-6 overflow-hidden' >Krishna Shrivastava</motion.h1>
                    <motion.h1

                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.7, delay: 1.2 }}

                        className=' text-3xl font-bold text-balance  my-2 mb-6 bfg overflow-hidden ' >Frontend Developer</motion.h1>
                    <motion.p

                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.8, delay: 1.5 }}

                        className='text-balance ' >I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React , as well as back-end technologies like Node.js, MySQL  and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>

                </div>
                <div className='ml-3 m-4 flex justify-center items-center w-[80%]' >
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.6, delay: 1.2 }}



                        className='md:max-w-[45%] max-w-[60%] rounded-2xl' src={mehe} alt="" />
                    {/* <img className='max-w-[70%]' src="https://github.com/kushald/react-portfolio-assets-kevin/blob/main/assets/kevinRushProfile.png?raw=true" alt="" /> */}
                </div>
            </div>
            <div>
                <Aboutsection />
            </div>
            <div className='my-5' >
                <Technologies />
            </div>
            <div>
                <Education/>
            </div>
            <div>
                <Projectsection />
            </div>
           
            <div className='mt-4'  >
                <h1 className='text-center text-2xl mb-7' >Get in <span className='text-purple-500  font-bold' >Touch</span></h1>
                <Formsubmer />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Homepage
