import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import {  Images , Icons } from '../configs'
import {Medias} from  '../configs'

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animateLetters, setAnimateLetters] = useState(false);
  const [letters, setLetters] = useState([]);
const words = ['Where Technology Meets Creativity', 'Teching You Ahead', 'Innovate. Integrate. Elevate.', 'Your Vision, Our Innovation', 'Empowering Digital Futures', 'Transforming Ideas into Reality', 'Smart Solutions for a Digital World', 'Bridging Technology and Business', 'Innovate Today, Lead Tomorrow', 'Your Partner in Digital Transformation'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    setLetters(currentWord.split(''));
    setAnimateLetters(false);

    const timeout = setTimeout(() => setAnimateLetters(true), 50);
    return () => clearTimeout(timeout);
  }, [currentWordIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateLetters(false); 
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 6000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
        className={`${el.bgColor} rounded-full p-1 cursor-pointer shadow-2xl flex justify-center items-center h-10 w-10 hover:translate-y-3 transition-all`}>
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
    className="w-full flex-col justify-start md:justify-center align-center md:align-start flex  gap-3">
      <h1 className='text-white font-black lg:text-5xl md:text-4xl text-2xl xl:text-6xl uppercase text-left md:text-center break-words md:mb-52 font-kanit' >
       <span>The Smart Agents I.T Solutions</span>
        </h1>
        
        <p className="flex flex-col gap-3 font-bold text-gray-400">
 <span  id ='typing-text' className={`md:text-3xl text-xl font-black break-words text-lemon_green ${animateLetters ? 'fade-out' : 'fade-in'}`}>  {letters.map((letter, index) => (
          <span
            key={index}
            style={{
              margin: '0 2px',
              opacity: animateLetters ? 1 : 0,
              transform: animateLetters ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.3s ${index * 0.1}s, transform 0.3s ${index * 0.1}s`,
            }}
          >
            {letter}
          </span>
        ))}</span>
Empowering your business with cutting-edge technology, seamless digital experiences, and expert support. Whether you're looking to enhance your IT infrastructure, develop custom software, or stay ahead in the digital landscape, we're here to turn your vision into reality. Discover how our innovative solutions can drive growth and success for your organization today.
</p>

        
        
        
        </motion.div>


<motion.div
initial={{x:-50,y:50,opacity:0}}
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
        className={`${el.bgColor} rounded-full p-1 cursor-pointer shadow-2xl flex justify-center items-center h-10 w-10  hover:translate-y-3 transition-all`}>
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