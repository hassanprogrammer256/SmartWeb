import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import {Images} from '../configs'
import { Card, Grid, Typography } from '@mui/joy';
import { useState } from 'react';

const About = () => {
   const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<>
<div className="relative">
  <h3 className='text-7xl opacity-15 font-black text-white font-pinyon text-center '>Explore Us</h3>
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
        <Tab
          value={0}
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
            backgroundColor: value === 0 ? theme.palette.success[500] : 'transparent',
            color: value === 0 ? theme.palette.primary.main : 'inherit',
            fontWeight: value === 0 ? 'bold' : 'normal',
            '&:hover': {
              backgroundColor: theme.palette.success.light + '20',
            },
          })}
        >
          About
        </Tab>
        <Tab
          value={1}
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
            backgroundColor: value === 1 ? theme.palette.success[500] : 'transparent',
            color: value === 1 ? theme.palette.primary.main : 'inherit',
            fontWeight: value === 1 ? 'bold' : 'normal',
            '&:hover': {
              backgroundColor: theme.palette.success.light + '20',
            },
          })}
        >
          EXPERience
        </Tab>
        <Tab
          value={2}
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
            backgroundColor: value === 2 ? theme.palette.success[500] : 'transparent',
            color: value === 2 ? theme.palette.primary.main : 'inherit',
            fontWeight: value === 2 ? 'bold' : 'normal',
            '&:hover': {
              backgroundColor: theme.palette.success.light + '20',
            },
          })}
        >
         skills
        </Tab>
      </TabList>

      <TabPanel value={0} sx={{ width: '100%', p: 2 }}>
  
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid size={8}>
      <img src={Images.YsanLocation} alt='Location Image'/>
      </Grid>
      <Grid size={4}>
        <Typography sx={{fontSize:'32px',textTransform:'capitalize',color:'white',fontFamily:'permanent-marker,cursive',fontWeight:'900'}}>Information</Typography>
       <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, md: 2 }}
      sx={{ flexGrow: 1 }}
    >
   
        <Grid size={{ xs: 2, sm: 4, md: 4 }} sx={{width:'100%',margin:'20px 0'}}>
          <Card size="lg" sx={{border:'1px solid gray',cursor:'pointer',transition:'all .3s ease-in-out',boxShadow:'-1px 1px 1px gray',bgcolor:'transparent',":hover":{border:'1px solid #c9f31d',translate:'0 5px'}}}>
<Typography sx={{textAlign:'center',fontWeight:'500',fontSize:'20px',textTransform:'capitalize'}}>Email</Typography>
<Typography sx={{textAlign:'center',fontWeight:'200',fontSize:'20px',textTransform:'lowercase',transition:'all ease .5s',color:'white',":hover":{color:'#c9f31d'}}}>thesmartagents.info@gmail.com</Typography>
          </Card>
        </Grid>
        
        </Grid>
      </Grid>
    
    </Grid>








      </TabPanel>
      <TabPanel value={1} sx={{ width: '100%', p: 2 }}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2} sx={{ width: '100%', p: 2 }}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
</>

  );
}


export default About