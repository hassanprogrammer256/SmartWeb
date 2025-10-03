import Logo_small from  '/images/SMART LOGO.png'
import Logo_large from  '/images/SMART LOGO_large.png'
import HananBg from '/images/hanan-bg.png'
import YsanLocation from '/images/YsanLocation.png'
import ArrowDown from '/icons/arrow.png'
import { FaFolderOpen,FaInfoCircle } from 'react-icons/fa'
import { FaBars, FaHouse,FaUser,FaThumbsUp,FaBriefcase} from 'react-icons/fa6'
import { GiSettingsKnobs } from 'react-icons/gi'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin,FaPhoneAlt, FaSms, FaWhatsapp } from 'react-icons/fa'
import {FaXTwitter } from 'react-icons/fa6'
import Project1  from '/images/projects/project-1.png'
import Skill1  from '/images/projects/skill-1.png'

export const Images =  {HananBg,YsanLocation}
export const Experience_Img = {Project1}
export const Skills_Img = {Skill1}
export const Icons =  {ArrowDown}

export const Logos = {Logo_small,Logo_large}


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
    {name:'Programming',value:0,color:'red',tools:[{name:'python',value:97},{name:'javascript',value:95},{name:'java',value:87},{name:'C#',value:97},]},
    {name:'Networking',value:1,color:'green',tools:[{name:'python',value:97},{name:'javascript',value:95},{name:'java',value:87},{name:'C#',value:97},]},
    {name:'3D Art',value:2,color:'blue',tools:[{name:'Blender',value:97},{name:'3D Maya',value:95},{name:'InkScape',value:87}]},
    {name:'Graphics',color:'yellow',value:3,tools:[{name:'Illustrator',value:97},{name:'PhotoShop',value:95},{name:'Indesign',value:87},{name:'Premiere Pro',value:87},{name:'AfterEffects',value:87}]},
 
  ]
