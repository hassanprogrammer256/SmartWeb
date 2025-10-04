import { Card, TabPanel } from "@mui/joy"
import { motion } from "framer-motion"
import { Experience_Img, Images } from "../configs"

export const ExperienceTab = () => {
  
 return(
<TabPanel value={1} sx={{ width: '100%', padding: 2 }}>

<motion.div 
initial={{y:10,opacity:0}}
transition={{type:'spring',delay:.5,duration:1}}
whileInView={{y:0,opacity:1}}
id='#experience'
className="md:grid flex flex-col gap-4 md:grid-cols-[40%_60%] p-3">

<div className="flex justify-center items-center w-full">
  <img src={Images.YsanLocation} alt='ExperienceImage1' className='w-full items-end flex justify-center'/>
</div>


</motion.div>


      </TabPanel>
 )
 }