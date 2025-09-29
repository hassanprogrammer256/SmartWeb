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

export const Images =  {HananBg,YsanLocation}
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
        {name: 'Testimonials',to:'#about',icon: FaThumbsUp},
    
    ]

// const whatsappNumber = '+1234567890'; 
  const phoneNumber = '+256764693744'; 
  const smsNumber = '+256764693744'; // Number for SMS
  const emailAddress = 'hassanprogrammer256@gmaiil.com.com'; // Your email address
  const instagramUrl = 'https://instagram.com/yourprofile';
  const twitterUrl = 'https://twitter.com/yourprofile';
  const linkedinUrl = 'https://linkedin.com/in/yourprofile';
  const facebookUrl = 'https://facebook.com/yourprofile';
