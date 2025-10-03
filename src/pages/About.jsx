import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import {Images} from '../configs'
import { Card, Grid, Typography } from '@mui/joy';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import { FaInfoCircle } from 'react-icons/fa';
import { Fa42Group, FaGears } from 'react-icons/fa6';
import { ExperienceTab } from './experience';
import { SkillsTab } from './skills';

const About = () => {
   const [value, setValue] = useState(0);
  //  const location= useLocation().hash

   const TabsMenu = [
    {name:'About',to:'#about',icon:FaInfoCircle},
    {name:'Experience',to:'#experience',icon:Fa42Group},
    {name:'Skills',to:'#skills',icon:FaGears},
   ]
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<>
<div className="relative">
  <h3 className='text-3xl md:text-7xl opacity-15 font-black text-white font-pinyon text-center '>Explore Us</h3>
  <h2 className="text-lemon_green uppercase text-center -translate-y-12 font-black text-4xl">About Us</h2>
</div>

 <Tabs
 variant='outlined'
      aria-label="AboutUsTabs"
      value={value}
      onChange={handleChange}
      sx={{ py: 3,  border:'none',outline:'none',bgcolor:'transparent'}}
    >
   <TabList
        variant="default"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          position: 'sticky',
          top: 0,
          backgroundColor: 'transparent',
          border:'none',
          zIndex: 10,
        }}
      >
{TabsMenu.map((el,index) => (
          <Tab
          value={index}
          variant='solid'
          sx={(theme) => ({
            borderRadius: '5%',
            cursor: 'pointer',
            fontSize: '20px',
            textTransform: 'uppercase',
            marginBottom: '4px',
            px: 2,
            py: 1,
            transition: 'background-color 0.3s',
            backgroundColor: value === index ? theme.palette.success[500] : 'transparent',
            color: value === index ? theme.palette.primary.main : 'inherit',
            fontWeight: value === index ? 'bold' : 'normal',
            '&:hover': {
              backgroundColor: theme.palette.success.light + '20',
            },
          })}
        >
      {el.name}
        </Tab>
))}
      </TabList>
        <TabPanel value={0} sx={{ width: '100%', padding: 2 }}><AboutTab /> </TabPanel>
        <TabPanel value={1} sx={{ width: '100%', padding: 2 }}><ExperienceTab /></TabPanel>
        <TabPanel value={2} sx={{ width: '100%', padding: 2 }}><SkillsTab /></TabPanel>

    </Tabs>
</>

  );
}


export default About;


export const AboutTab = () => {
  
 return(


<motion.div 
initial={{y:10,opacity:0}}
transition={{type:'spring',delay:.5,duration:1}}
whileInView={{y:0,opacity:1}}
id='#about'
className="md:grid flex flex-col gap-4 md:grid-cols-[40%_60%] p-3">

<div className="flex justify-center items-center w-full">
  <img src={Images.YsanLocation} alt='Location Image' className='w-full items-end flex justify-center'/>
</div>

<div className="md:grid flex flex-col lg:grid-cols-2 w-full gap-5">
<div>
  <Card size="lg" sx={{border:'1px solid gray',width:'100%', cursor:'pointer',transition:'all .3s ease-in-out',boxShadow:'-1px 1px 1px gray',bgcolor:'transparent',":hover":{border:'1px solid #c9f31d',translate:'0 5px'}}}>
        <div className="flex flex-col w-full">
  <h3 className='text-gray-400 font-black text-xl text-center truncate capitalize'>Email</h3>
  <h4 className='text-sm md:text-xl text-white font-bold cursor-pointer hover:text-lemon_green transition-all lowercase text-center hover:underline underline-offset-8'><a href="mailto:smartagent.it@gmail.com">smartagent.it@gmail.com</a></h4>
        </div>
  
            </Card>
</div>

<div>
  <Card size="lg" sx={{border:'1px solid gray',width:'100%', cursor:'pointer',transition:'all .3s ease-in-out',boxShadow:'-1px 1px 1px gray',bgcolor:'transparent',":hover":{border:'1px solid #c9f31d',translate:'0 5px'}}}>
        <div className="flex flex-col w-full">
  <h3 className='text-gray-400 font-black text-xl text-center truncate capitalize'>Location</h3>
  <h4 className='text-sm md:text-xl text-white font-bold cursor-pointer hover:text-lemon_green transition-all lowercase text-center hover:underline underline-offset-8'>Kibuli
  </h4>
        </div>
  
            </Card>
</div>


</div>

</motion.div>

 )
 }