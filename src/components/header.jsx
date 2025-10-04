import { Button, Grid, Typography } from '@mui/joy'
import {Logos} from '../configs'
import { Menu } from '../configs'
import { FaBars } from 'react-icons/fa'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'

const Header = () => {
const [activeHash, setActiveHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          const newHash = `#${section.id}`;
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, null, newHash);
            setActiveHash(newHash);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <>
<div className='w-full fixed z-[99] left-0 px-3 bg-black text-white top-0 py-2'>
<div className='grid grid-cols-[30%_70%]'>
    <div className="flex gap-3 items-center">
        <img src={Logos.Logo_small} alt="logo" className='w-24'/>
        <h4 className='font-permanent lg:text-xl hover:text-lemon_green cursor-pointer hover:underline transition-all hidden xl:block'>Smart Agents</h4>
    </div>

<div className="flex justify-end items-center">
    <nav className="hidden gap-10  lg:flex">
       {
        Menu.map((el,index) => (
            <li
  className={`list-none flex gap-3 items-center ${activeHash === el.to ? 'text-lemon_green' : ''}`}
>
                <el.icon  size='20'/>
                <a
  href={el.to}
  className='hover:text-lemon_green transition-all hover:underline uppercase text-md lg:text-xl'
>
  {el.name}
</a>

                </li>
        ))
       }

       <div className='hidden xl:flex'>
           <Button sx={{background:'#c9f31d',transition:'all .3s ease',color:'black',fontFamily:'cursive',fontWeight:'800'}} className=' hover:text-white cursor-pointer '>
            Hire Us
           </Button>
       </div>
    </nav>
    <div className="flex lg:hidden">
        <FaBars size={35} aria-labelledby='Menu' title='Menu' className='cursor-pointer hover:text-lemon_green transition-all'/></div>
  

</div>

</div>


</div>
  </>
  )
}

export default Header
