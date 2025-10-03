import { Card, CircularProgress, LinearProgress, Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy"
import { motion } from "framer-motion"
import { Skills_Img, SkillsData } from "../configs"
import { useState } from "react";
import { FaPython } from "react-icons/fa";


export const SkillsTab = () => {
    const [value, setValue] = useState(0);
     const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
 return(
<TabPanel value={2} sx={{ width: '100%', padding: 2 }}>

<motion.div 
initial={{y:10,opacity:0}}
transition={{type:'spring',delay:.5,duration:1}}
whileInView={{y:0,opacity:1}}
id='#skills'
className=" p-3">
<div>
   <Tabs
 variant='outlined'
      aria-label="Skills"
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
{SkillsData.map((skill,index) => (
     <Tab
          value={index}
          variant='solid'
          sx={(theme) => ({
            borderRadius: '5%',
            cursor: 'pointer',
            fontSize: '16px',
            textTransform: 'uppercase',
            marginBottom: '4px',
            px: 2,
            py: 1,
            transition: 'background-color 0.3s',
            backgroundColor: value === index ? theme.palette.success[500] : 'transparent',
            color: value === index ? theme.palette.success.main : 'inherit',
            fontWeight: value === index ? 'bold' : 'normal',
            '&:hover': {
              backgroundColor: theme.palette.success.light + '20',
            },
            
          })}
        >
      {skill.name}
        </Tab>))}</TabList>

      {SkillsData[value].tools.map((tool,index) => (
<motion.div
    
    initial ={{y:-5,opacity:0}}
    transition={{type:'spring',delay:.5,duration:1}}
    whileInView={{opacity:1,y:0}}
    
    className="grid md:grid-cols-[20%_80%] px-1 shadow-lg bg-red rounded-lg hover:translate-y-2 transition-all gap-3 w-full">
<div className="flex gap-2">
    <span className="rounded-lg bg-gray-700 cursor-pointer transition-all hover:translate-y-3 hover:bg-black/20  flex-col items-center justify-center hidden md:flex"><FaPython size={30} color="gray"/></span>
    <h4 className="items-start text-left md:text-centermd:items-center justify-center capitalizefont-black hidden md:flex text-2xl cursor-pointer transition-all hover:underline">{tool.name}</h4>
</div>

<div className="grid grid-cols-[90%_10%]">
    
    <LinearProgress value={tool.value} determinate sx={{background:'transparent',color:`${SkillsData[value].color}`}}/>
    <h4 className="items-start text-left md:text-centermd:items-center justify-center capitalizefont-black hidden md:flex text-2xl cursor-none">{tool.value}%</h4>
</div>

        </motion.div>
      ))}





    </Tabs>
</div>

</motion.div>


      </TabPanel>
 )
 }