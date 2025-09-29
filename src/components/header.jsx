import { Button, Grid, Typography } from '@mui/joy'
import { Box, Menu } from '@mui/material'
import React, { useState } from 'react'
import {Logos} from '../configs'
import { FaHamburger } from 'react-icons/fa'
import { FaBars, FaHouse,FaUser,FaRProject,FaThumbsUp,FaServicestack,FaBriefcase} from 'react-icons/fa6'

const Header = () => {
    const [active,setActive] = useState(0)
    const Menu = [
        {name: 'Home',to:'/',icon: FaHouse},
        {name: 'About',to:'#about',icon: FaUser},
        {name: 'Projects',to:'#work',icon: FaBriefcase},
        {name: 'Services',to:'#services',icon: FaRProject},
        {name: 'Testimonials',to:'#about',icon: FaThumbsUp},
    
    ]
  return (
  <>
<div className='w-full fixed left-0 px-3 bg-black text-white top-0 py-2'>
<div className='grid grid-cols-[30%_70%]'>
    <div className="flex gap-3 items-center">
        <img src={Logos.Logo_small} alt="logo" className='w-24'/>
        <h4 className='font-permanent lg:text-xl hover:text-lemon_green cursor-pointer hover:underline transition-all hidden xl:block'>Smart Agents</h4>
    </div>

<div className="flex justify-end items-center">
    <nav className="flex gap-10 hidden lg:flex">
       {
        Menu.map((el,index) => (
            <li className='list-none flex gap-3 items-center'>
                <el.icon  size='20'/>
                <a href={el.to} className='hover:text-lemon_green transition-all hover:underline uppercase text-md lg:text-xl'>{el.name}</a>
                </li>
        ))
       }

       <div className='hidden xl:flex'>
           <Button sx={{background:'#c9f31d',transition:'all .3s ease',color:'black',fontFamily:'cursive',fontWeight:'800'}} className=' hover:text-white cursor-pointer '>
            Hire Us
           </Button>
       </div>
    </nav>
    <div className="flex flex lg:hidden">
        <FaBars size={35} aria-labelledby='Menu' title='Menu' className='cursor-pointer hover:text-amber-100 transition-all'/></div>
  

</div>

</div>


</div>
  </>
  )
}

export default Header
