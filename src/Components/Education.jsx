import React from 'react'
import { motion } from 'framer-motion'
const Education = () => {
    return (
        <div>
            {/* <h1 className='text-center text-2xl mb-7' >Education</h1> */}
            {/* <div className='flex items-center justify-evenly' >
            <div>
                <h3 className='text-xl font-semibold' >2021</h3>
            </div>
            <div>
                <p>Completed Class 10th </p>
            </div>
        </div> */}
            <div>
                <h1 className='text-center text-white font-extrabold text-2xl' >Education</h1>
                <div className='w-full flex justify-center items-center p-3' >
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        initial={{ x: -100, opacity: 0 }}

                        className='flex flex-col gap-y-4'  >
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.1, delay: 0.5 }}
                            initial={{ x: -180, opacity: 0 }}
                           
                            // whileInView={{ y: 0, opacity: 1 }}
                            // transition={{ duration: 1.2, delay: 0.6 }}
                            // initial={{ y: -100, opacity: 0 }}

                            className='flex items-center justify-end' >
                            <motion.h1

                                className=' text-white text-right plcx font-semibold pr-2'>Year 2021</motion.h1>
                            <div className='bg-gray-700 w-3 h-3 rounded-full' ></div>
                            <div className='w-9 bg-gray-700 h-1' ></div>
                        </motion.div>
                        <motion.div
                            //  whileInView={{ x: 0, opacity: 1 }}
                            //  transition={{ duration: 1.4, delay: 0.6 }}
                            //  initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.7 }}
                            initial={{ x: -100, opacity: 0 }}
                            viewport={{once:true , amount:0.5}}
                        >


                            <h1 className='border-b-2 plcx font-semibold text-balance text-center pr-3 border-green-600 text-white'>Completed Diploma in Civil Engineering after 10th</h1>
                        </motion.div>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.6, delay: 0.8 }}
                            initial={{ x: -100, opacity: 0 }}
                            className='flex items-center justify-end' >
                            <h1 className=' text-white text-right plcx font-semibold pr-2'>Year 2021</h1>
                            <div className='bg-sky-600 w-3 h-3 rounded-full' ></div>
                            <div className='w-9 bg-sky-600 h-1' ></div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        initial={{ y: 200, opacity: 0 }}
                        viewport={{ once: true, amount: 0.5 }}

                        className='w-[5.5px] plce   h-56 rounded-full'></motion.div>
                    <motion.div
                        //  whileInView={{ x: 0, opacity: 1 }}
                        //  transition={{ duration: 0.9, delay: 0.3 }}
                        //  initial={{ x: 100, opacity: 0 }}
                        className='flex flex-col gap-y-4 '  >
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            initial={{ x: 100, opacity: 0 }}
                            viewport={{ once: true, amount: 0.5 }}

                        >
                            <h1 className='border-b-2 text-balance pl-3  border-gray-700 text-white plcx font-semibold'>Completed 10th Class</h1>
                        </motion.div>
                        <div className='flex items-center justify-start' >

                            <div className='w-9 bg-green-600  h-1' ></div>
                            <div className='bg-green-600 w-3  h-3 rounded-full' ></div>
                            <h1 className='pl-2 text-white text-right plcx font-semibold'>Year 2021</h1>

                        </div>

                        <div>
                            <h1 className='border-b-2 border-sky-600 pl-3 text-white text-balance text-center plcx font-semibold'>Now Pursuing Computer Science  Engineering</h1>

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Education
