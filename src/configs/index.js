import Logo_small from  '/images/SMART LOGO.png'
import Logo_large from  '/images/SMART LOGO_large.png'
import bannerBg from '/images/background.png'
import HananBg from '/images/hanan-bg.png'
import ArrowDown from '/icons/arrow.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin,FaPhoneAlt, FaSms, FaWhatsapp } from 'react-icons/fa'
import {FaXTwitter } from 'react-icons/fa6'

export const Images =  {HananBg}
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