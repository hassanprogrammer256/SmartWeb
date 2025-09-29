import React, { useState } from 'react'
import About from './About'
import {motion} from 'framer-motion'
import {  Images , Icons } from '../configs'
import {Medias} from  '../configs'
import {RapidLetterSearch} from '../hooks/writer'

const Home = () => {
const [isInView, setInView] = useState(false);

  return (

   <>
<div className="banner md:grid md:grid-cols-[5%_90%_5%] mt-20 gap-5">
   <div className='hidden md:block'>
            <h2 className="font-dancing font-light space-x-1 text-5xl text-red-700 text-left transform rotate-90 text-nowrap  mt-20 tracking-[5px] transition-all hover:text-white cursor-pointer">
          Contact Us
            </h2>
<img src={Icons.ArrowDown} className='mt-52 mb-5'/>

<div className="flex flex-col gap-4">
    {Medias.contacts.map((el,index) => (
        <motion.div 
        initial={{opacity:0,scale:0}}
        transition={{type:'spring',delay:index*.5,duration:.3}}
        whileInView={{opacity:1,scale:1}}
        className={`${el.bgColor} rounded-full p-1 cursor-pointer shadow-2xl flex justify-center items-center h-10 w-10 cursor-pointer hover:translate-y-3 transition-all`}>
<el.icon size={30} color='white'/>
</motion.div>
    ))}

</div>


        </div>
    
   <div className="flex flex-col items-start md:flex-row justify-center">
    <motion.div 
    initial={{opacity:0,scale:0}}
    transition={{type:'spring',delay:.5,duration:1,bounce:.5}}
     whileInView={{ opacity: 1, scale: 1 }}
    className="w-full flex justify-start md:justify-center align-center md:align-start"><h1 className='text-white font-black lg:text-5xl md:text-4xl text-2xl xl:text-6xl uppercase text-left md:text-center break-words'>
       <RapidLetterSearch word={'the smart agents Information and technology Solutions'} />
        </h1></motion.div>
<motion.div
initial={{x:-500,y:500,opacity:0}}
transition={{type:'spring',duration:1,bounce:.5}}
whileInView={{x:0,y:0,opacity:1}}

className=" flex justify-center flex-col w-full md:items-start items-center">     <img src={Images.HananBg} className='w-full' alt='C.E.O welcome image '/></motion.div>

</div> 
  <div className='hidden md:block'>
            <h2 className="font-dancing font-light space-x-1 text-5xl text-red-700 text-left transform rotate-90 text-nowrap  mt-20 tracking-[5px] transition-all hover:text-white cursor-pointer">
            Follow Us
         </h2>
<img src={Icons.ArrowDown} className='mt-52 mb-5 '/>
<div className="flex flex-col gap-4">
    {Medias.follow.map((el,index) => (
        <motion.div 
        initial={{opacity:0,scale:0}}
        transition={{type:'spring',delay:index*.5 + 2,duration:.3}}
        whileInView={{opacity:1,scale:1}}
        className={`${el.bgColor} rounded-full p-1 cursor-pointer shadow-2xl flex justify-center items-center h-10 w-10 cursor-pointer hover:translate-y-3 transition-all`}>
<el.icon size={30} color='white'/>
</motion.div>
    ))}

</div>





        </div>
</div>


















   </>
  )
}

export default Home