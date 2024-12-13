import React from 'react'
import {motion} from 'framer-motion'
const Technologies = () => {
    return (
        <div>
            <h1 className='text-center text-2xl mb-7' >Technologies</h1>

            <motion.div
            
            initial={{x:-100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:1.2 ,delay:0.4}}
                    viewport={{ once: true, amount: 0.5 }} 
            
            className='flex items-center flex-wrap justify-center gap-x-5' >
                <motion.img
                
               
                
                className='m-3 w-20 img-float p-2 border-2 shadow-zinc-700 shadow-md border-zinc-700 rounded-lg' src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png" alt="" />
                <img className='m-3 w-20 img-float p-3  border-2 shadow-zinc-700 shadow-md border-zinc-700 rounded-lg' src="https://seeklogo.com/images/G/greensock-gsap-icon-logo-13BB451E88-seeklogo.com.png" alt="" />
                <img className='m-3 w-20 img-float p-2 border-2 shadow-zinc-700 shadow-md border-zinc-700 rounded-lg' src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png" alt="" />
                <img className='m-3 w-20 img-float p-2 border-2 shadow-zinc-700 shadow-md border-zinc-700 rounded-lg' src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="" />
                <img className='m-3 w-20 img-float p-2 border-2 shadow-zinc-700 shadow-md border-zinc-700 rounded-lg' src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
                <img className='m-3 w-20 img-float p-2 border-2 shadow-zinc-700 shadow-md border-zinc-700 rounded-lg' src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
            </motion.div>

        </div>
    )
}

export default Technologies
