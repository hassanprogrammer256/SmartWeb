import { Card, CircularProgress, LinearProgress, Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy"
import { motion } from "framer-motion"
import { Images, Skills_Img, SkillsData } from "../configs"
import { useState, useEffect } from "react"
import { FaPython } from "react-icons/fa"

export const SkillsTab = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [progressValues, setProgressValues] = useState(
    SkillsData.map(skill => skill.tools.map(() => 0))
  )

  // Animate progress bars on selection change with delay based on position
  useEffect(() => {
    // Reset all progress to 0 immediately
    setProgressValues(prev => prev.map(tools => tools.map(() => 0)))

    // Animate each tool with delay based on its index
    SkillsData[value].tools.forEach((tool, index) => {
      const delay = index * 0.2 * 1000 // delay in milliseconds
      setTimeout(() => {
        const target = tool.value
        let current = 0
        const interval = setInterval(() => {
          if (current >= target) {
            clearInterval(interval)
          } else {
            current += Math.ceil(target / 20) // animate in 20 steps
            setProgressValues(prev => {
              const newValues = [...prev]
              newValues[value][index] = current > target ? target : current
              return newValues
            })
          }
        }, 50)
      }, delay)
    })
  }, [value])

  return (
    <TabPanel
      value={1}
      sx={{ width: "100%", padding: 2 }}
    >

 <motion.div
  initial={{ y: 10, opacity: 0 }}
  transition={{ type: "spring", delay: 0.5, duration: 1 }}
  whileInView={{ y: 0, opacity: 1 }}
  id="#skills"
 className="md:grid flex flex-col gap-4 md:grid-cols-[40%_60%] p-3"
>
        <div className="flex justify-center items-center w-full">
        <img src={Images.YsanLocation} alt='ExperienceImage1' className='w-full items-end flex justify-center'/>
      </div>
  {/* Tabs Header */}
  <Tabs
    variant="outlined"
    aria-label="Skills"
    value={value}
    onChange={handleChange}
    sx={{
      py: 3,
      border: "none",
      outline: "none",
      bgcolor: "transparent",
    }}
  >
  <div
  style={{
    overflowX: 'auto', // enables scrollbar when content overflows
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    WebkitOverflowScrolling: 'touch', // smooth scrolling on iOS
    scrollbarWidth: 'thin', // for Firefox
    scrollbarColor: 'gray #ccc', 
  }}
>
  <TabList
    variant="default"
    sx={{
      display: 'inline-flex', // keep tabs in a row
      flexWrap: 'nowrap',   // prevent wrapping
      justifyContent: 'center', // or 'flex-start' if preferred
      gap: 2,
      position: 'sticky',
      top: 0,
      backgroundColor: 'transparent',
      border: 'none',
      zIndex: 10,
    }}
  >
    {/* Your tabs here */}
    {SkillsData.map((skill, index) => (
      <Tab
        key={index}
        value={index}
        variant="solid"
        sx={(theme) => ({
          borderRadius: '5%',
          cursor: 'pointer',
          fontSize: '14px',
          textTransform: 'uppercase',
          px: 2,
          py: 1,
          transition: 'background-color 0.3s',
          backgroundColor:
            value === index
              ? theme.palette.success[500]
              : 'transparent',
          color:
            value === index
              ? theme.palette.success.main
              : 'inherit',
          fontWeight: value === index ? 'bold' : 'normal',
          "&:hover": {
            backgroundColor: theme.palette.success.light + '20',
          },
        })}
      >
        {skill.name}
      </Tab>
    ))}
  </TabList>
</div>

    {/* Tools List */}
    {SkillsData[value].tools.map((tool, index) => (
      <motion.div
        key={index}
        initial={{ y: -5, opacity: 0 }}
        transition={{ type: "spring", delay: 0.5, duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-start items-center md:justify-between gap-4 p-3 shadow-lg bg-transparent rounded-lg hover:translate-y-2 transition-all w-full mb-4"
      >
        {/* Tool Info */}
        <div className="flex items-center gap-3 ">
          <span className="rounded-lg bg-gray-900 cursor-pointer transition-all hover:translate-y-3 hover:bg-black/20 flex items-center justify-center p-2">
            <tool.icon size={30} color="white" />
          </span>
          <h4 className="text-left md:text-center font-black capitalize m-0 text-sm md:text-base text-gray-50">{tool.name}</h4>
        </div>
        {/* Progress Bar */}
        <div className="flex items-center w-full md:w-2/3">
          <LinearProgress
            value={progressValues[value][index]}
            determinate
            variant="solid"
            sx={{
              background: "transparent",
              flexGrow: 1,
              height: "8px", // smaller height for small screens
              borderRadius: "4px",
              marginRight: "8px",
              minWidth: "100px", // ensure it doesn't get too small
            }}
          />
          <h4 className="w-12 text-right text-sm md:text-base">{progressValues[value][index]}%</h4>
        </div>
      </motion.div>
    ))}
  </Tabs>
</motion.div>
    </TabPanel>
  )
}