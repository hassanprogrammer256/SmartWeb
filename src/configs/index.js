import Logo_small from  '/images/SMART LOGO.png'
import Logo_large from  '/images/SMART LOGO_large.png'
import HananBg from '/images/hanan-bg.png'
import YsanLocation from '/images/YsanLocation.png'
import Minify_Logo from '/images/mini_logo.png'
import ArrowDown from '/icons/arrow.png'
import { FaCamera, FaCode, FaCube, FaFolderOpen,FaHdd,FaInfoCircle, FaLaptopCode, FaPython, FaSearch, FaTerminal, FaUserShield } from 'react-icons/fa'
import { FaBars, FaHouse,FaUser,FaThumbsUp,FaBriefcase, FaJava} from 'react-icons/fa6'
import { Gi3dGlasses, GiAutoRepair, GiCloudDownload, GiGearHammer, GiHeartBeats, GiRadarSweep, GiSettingsKnobs, GiWifiRouter } from 'react-icons/gi'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin,FaPhoneAlt, FaSms, FaWhatsapp } from 'react-icons/fa'
import {FaXTwitter } from 'react-icons/fa6'
import Project1  from '/images/projects/project-1.png'
import Skill1  from '/images/projects/skill-1.png'
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiAdobepremierepro, SiBlender, SiCss3, SiJavascript } from 'react-icons/si'
import { MdBrush } from 'react-icons/md'
import { Wifi } from '@mui/icons-material'

export const Images =  {HananBg,YsanLocation}
export const Experience_Img = {Project1}
export const Skills_Img = {Skill1}
export const Icons =  {ArrowDown}

export const Logos = {Logo_small,Logo_large,Minify_Logo}


export const Medias =  {
    'contacts':[
        {name:'whatsapp',link:'',icon:FaWhatsapp,bgColor:'bg-green-900'},
        {name:'call',link:'',icon:FaPhoneAlt,bgColor:''},
        {name:'sms',link:'',icon:FaSms,bgColor:'bg-blue-900'},
        {name:'email',link:'',icon:FaEnvelope,bgColor:'bg-red-600 '},
               ],
    'follow':[
        {name:'facebook',link:'',icon:FaFacebook,bgColor:'bg-blue-900 '},
        {name:'instagram',link:'',icon:FaInstagram,bgColor:'bg-purple-900 '},
        {name:'x-twiter',link:'',icon:FaXTwitter,bgColor:''},
        {name:'inkedin',link:'',icon:FaLinkedin,bgColor:''},
    ]
}


    export const Menu = [
        {name: 'Home',to:'#home',icon: FaHouse},
        {name: 'About',to:'#about',icon: FaInfoCircle},
        {name: 'Projects',to:'#work',icon: FaFolderOpen},
        {name: 'Services',to:'#services',icon:  GiSettingsKnobs },
        {name: 'Testimonials',to:'#testimonies',icon: FaThumbsUp},
    
    ]

// const whatsappNumber = '+1234567890'; 
  const phoneNumber = '+256764693744 / +256751439441'; 
  const smsNumber = '+256764693744'; // Number for SMS
  const emailAddress = 'smartagent.it@gmail.com'
  const instagramUrl = 'https://instagram.com/yourprofile';
  const twitterUrl = 'https://twitter.com/yourprofile';
  const linkedinUrl = 'https://linkedin.com/in/yourprofile';
  const facebookUrl = 'https://facebook.com/yourprofile';



  export const SkillsData = [
    {name:'Programming',value:0,icon:FaCode,tools:[{name:'python',value:97,icon:FaPython},{name:'javascript',value:95,icon:SiJavascript},{name:'java',value:87,icon:FaJava},{name:'CSS',value:97,icon:SiCss3 },]},
    {name:'Networking',value:1,icon:Wifi ,tools:[{name:'Cisco',value:97,icon: GiWifiRouter},{name:'WireShark',value:97,icon:FaSearch},{name:'Nmap',value:95,icon:GiRadarSweep },{name:'Netcat',value:87,icon:FaTerminal},{name:'PuTTY',value:97,icon:FaLaptopCode}]},
    {name:'Repair $ Maintenance',value:2,icon:GiGearHammer ,tools:[{name:'Diagnostic',value:97,icon:GiHeartBeats },{name:'Remote Support and Management',value:97,icon:FaUserShield },{name:'Operating System and Partition ',value:95,icon:FaHdd },{name:'data recovery',value:87,icon:GiCloudDownload },{name:'Troubleshooting',value:97,icon:GiAutoRepair }]},
    {name:'3D Art',value:2,icon:Gi3dGlasses ,tools:[{name:'Blender',value:97,icon:SiBlender},{name:'3D Maya',value:95,icon:FaCube},{name:'InkScape',value:87,icon:MdBrush}]},
    {name:'Graphics',value:3,icon:FaCamera ,tools:[{name:'Illustrator',value:97,icon:SiAdobeillustrator},{name:'PhotoShop',value:95,icon:SiAdobephotoshop},{name:'Indesign',value:87,icon:SiAdobeindesign},{name:'Premiere Pro',value:87,icon:SiAdobepremierepro},{name:'AfterEffects',value:87,icon:SiAdobeaftereffects}]},
 
  ]
