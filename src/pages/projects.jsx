import { Button, Card, Tab, TabList, TabPanel, Tabs } from '@mui/joy';
import React, { useState } from 'react'
import { FaBrush, FaCamera, FaCode, FaEye, FaHeart, FaThumbsUp, FaTools, FaWifi } from 'react-icons/fa';
import {  FaTableList, FaThumbsDown } from 'react-icons/fa6';
import { Logos } from '../configs';


const Projects = () => {
      const [value, setValue] = useState(0);
    
    
       const TabsMenu = [
        {name:'All',to:'#projects-all',icon:FaTableList},
        {name:'Programming',to:'#projects-programming',icon:FaCode},
        {name:'Networking',to:'#projects-networking',icon:FaWifi},
        {name:'3D Art',to:'#projects-3dart',icon:FaBrush},
        {name:'Graphics',to:'#projects-graphics',icon:FaCamera},
        {name:'Repair',to:'#projects-repair',icon:FaTools}]

      const handleChange = (event, newValue) => {
        setValue(newValue);}


  return (

 <Tabs
 variant='outlined'
      aria-label="ProjectsTabs"
      value={value}
      onChange={handleChange}
      sx={{ py: 3,  border:'none',outline:'none',bgcolor:'transparent'}}
    >
<div className="flex max-w-full overflow-x-auto md:justify-center ">
     <TabList
        variant="solid"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          position: 'sticky',
          color:'white',
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
      <el.icon size={20} color='#c9f31d' />{el.name}
        </Tab>
))}
      </TabList>      
    </div>

        <TabPanel value={0} sx={{ width: '100%', padding: 2 }}><ProjectAll /> </TabPanel>

    </Tabs>

  )
}

export default Projects




const ProjectAll  = () => {
  return (
    <div className='text-white text-2xl font-black'>
   <div className="grid md:grid-cols-2 lg:grid-cols-3">
<div>
          <Card
            size="lg"
            sx={{
              border: '1px solid gray',
              width: '100%',
              cursor: 'pointer',
              transition: 'all .3s ease-in-out',
              boxShadow: '-1px 1px 1px gray',
              bgcolor: 'transparent',
              ":hover": { border: '1px solid #c9f31d', translate: '0 5px' },
            }}
          >
            <div className="flex flex-col w-full">
              <a href=""><img src={Logos.Logo_large} className='aspect-auto  cursor-pointer transition-all hover:opacity-50 rounded-lg mb-3' alt='project_image'/></a>
              <div className="flex flex-col items-center w-full">
                <div className="flex justify-center  items-center w-full">
                  <div className="grid grid-cols-2 md:grid-cols-4 w-full mb-3 gap-5">
                    <div className="flex  w-full items-center gap-3">
                        <FaThumbsUp color='blue' size={15}/><span className='text-gray-100 text-xs'>500+</span>
                    </div> 
                    <div className="flex  w-full items-center gap-3">
                        <FaThumbsDown color='red' size={15}/><span className='text-gray-100 text-xs'>50</span>
                    </div> 

                     <div className="flex items-center w-full gap-3">
                        <FaHeart color='purple' size={15}/><span className='text-gray-100 text-xs'>10K</span>
                    </div>  
                    <div className="flex  w-full items-center gap-3">
                        <FaEye color='orange' size={15}/><span className='text-gray-100 text-xs'>12K</span>
                    </div>

                  </div>
                </div>
                <div className="flex justify-center w-full mb-2">
                    <h4 className="text-lg text-gray-50 font-black cursor-pointer hover:underline underline-offset-2 hover:text-lemon_green transition-all truncate">Project Name</h4>
                </div>
                <div className="w-full justify-center flex">
                     <Button sx={{background:'#c9f31d',transition:'all .3s ease',color:'black',fontWeight:'800'}} className=' hover:text-white cursor-pointer  w-full'>
            View Poject
           </Button>
                </div>
                  
              </div>

            </div>
          </Card>
        </div>



   </div>
    </div>
  )
}

;

