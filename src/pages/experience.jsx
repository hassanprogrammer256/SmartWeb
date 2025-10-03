import { Card, TabPanel } from "@mui/joy"
import { motion } from "framer-motion"
import { Experience_Img } from "../configs"

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
  <img src={Experience_Img.Project1} alt='ExperienceImage1' className='w-full items-end flex justify-center'/>
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


      </TabPanel>
 )
 }