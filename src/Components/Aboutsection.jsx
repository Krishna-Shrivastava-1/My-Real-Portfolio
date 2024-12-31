import React from 'react'
import mebout from '../assets/meabout.jpg'
import {motion} from 'framer-motion'
const Aboutsection = () => {
    return (
        <div>
            <div>
                <div className='my-6 mx-2' >
                    <h1 className='text-white text-center text-3xl font-semibold overflow-hidden' >About <span className='text-sky-500' >Me</span></h1>
                </div>
                <div className='flex items-center justify-center p-2 flex-wrap md:flex-nowrap w-full' >
                    <motion.div
                    
                    initial={{
                        opacity: 0,
                        rotateX: -90, // Start from a vertical tilt
                        translateY: 100, // Start below the screen
                        scale: 0.8, // Start smaller
                    }}
                    whileInView={{
                        opacity: 1,
                        rotateX: 0, // Become flat
                        translateY: 0, // Come to its position
                        scale: 1, // Become full size
                    }}
                    transition={{
                        duration: 1, // Animation duration
                        delay: 0.2, // Animation delay
                        type: "spring", // Add spring-like effect
                        stiffness: 100,
                    }}
                    viewport={{ once: true, amount: 0.5 }} 
                    
                    className='ml-3 m-4 flex justify-center items-center md:w-[45%]'  >
                        <img className='rounded-2xl w-[70%] min-w-[55%]' src={mebout} alt="" />
                        {/* <img className='rounded-2xl ' src="https://github.com/kushald/react-portfolio-assets-kevin/blob/main/assets/about.jpg?raw=true" alt="" /> */}
                    </motion.div>
                    <div className='md:w-[60%] w-[90%]  mx-3' >
                        <motion.p 
                        
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.3 }}
                        viewport={{once:true,amount:0.5}}
                        className='text-balance md:leading-7 md:text-lg ' >I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React,  Node.js, MySQL,  and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutsection
