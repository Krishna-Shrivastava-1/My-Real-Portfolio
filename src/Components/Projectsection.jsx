import React from 'react'
import youtubelogo from '../assets/youtubelogo.png'
import foodoo from '../assets/fav-re.png'
import { motion } from 'framer-motion'
const Projectsection = () => {

    const dataproj = [{ id: 1, title: 'Youtube', link: 'https://youtuubbe.netlify.app/', image: youtubelogo, para: 'In this Youtube Clone I have used Firebase for Authentication , React as frontend library and Tailwind CSS for modern responsiveness of this website', technology: ['React', 'Firebase', 'Tailwind CSS', 'Youtube V3 API'] },
    { id: 2, title: 'Epic Games', link: 'https://epicgamess.netlify.app/', image: 'https://logos-world.net/wp-content/uploads/2021/12/Epic-Games-Symbol.png', para: 'In this Epic Games Clone I have used Firebase for Authentication , React as frontend library and Tailwind CSS for modern responsiveness of this website', technology: ['React', 'Firebase', 'Tailwind CSS', 'RawG.io API'] },
    { id: 3, title: 'Foodoo', link: 'https://fooodoo.netlify.app/', image: foodoo, para: 'In this Food Recipe I have used Firebase for Authentication , React as frontend library and Tailwind CSS for modern responsiveness of this website', technology: ['React', 'Firebase', 'Tailwind CSS', 'Meals DB API'] },
    { id: 4, title: 'Twitter (X)', link: 'https://twitu.netlify.app/', image: 'https://www.sarkarinaukriexams.com/images/import/sne21299025521.png', para: 'In this Twitter Clone I have used Firebase for Authentication , React as frontend library and Tailwind CSS for modern responsiveness of this website', technology: ['React', 'Firebase', 'Tailwind CSS'] }
    ]
    return (
        <div>
            <h1 className='text-center text-2xl mb-7' >Projects</h1>
            <div className='flex  items-center justify-center flex-col' >
                {
                    dataproj.map((index) => (
                        <div className='flex group flex-wrap md:flex-nowrap items-center justify-evenly w-full my-3' key={index.id} >
                            <div>
                                
                                <motion.img
                                
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.9, delay:0.5 }}
                                viewport={{ once: true, amount: 0.5 }} 


                                className='w-36' src={index.image} alt="" />
                            </div>
                            <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }} 


                            className='md:w-[40%] flex flex-col items-center justify-around p-2 '>
                                <h1 className='font-bold text-2xl hover:underline cursor-pointer select-none text-nowrap whitespace-nowrap my-2' ><a href={index.link} target='_blank'>{index.title}</a></h1>
                                <p className='text-balance text-center' >{index.para}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {/* Conditional check to ensure technology exists and is an array */}
                                    {index.technology && index.technology.map((tech, techIndex) => (
                                        <motion.div 
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: 150 }}
                                        transition={{ duration: 0.9, delay:0.5 }}
                                        
                                        
                                        key={techIndex} className="bg-zinc-900 text-purple-600 font-semibold p-2 rounded-lg">
                                            {tech}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <div className='group-hover:opacity-100 opacity-0' >

                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Projectsection
