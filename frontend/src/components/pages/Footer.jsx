import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FcAddressBook, FcCallback, FcHome } from "react-icons/fc";
import { FaFacebook,FaLinkedin,FaInstagram  } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
    const navigate=useNavigate();
  return (
    <div className='flex w-full   font-bold  items-center bg-green-300 h-[110px]'>
    <div className='w-1/2 ml-10 flex flex-col'>
     <p>You Can Contact us By:</p>
    <div className='flex mt-2 '>
    <p className='text-3xl  cursor-pointer'><MdAttachEmail /></p>
    <p className='text-3xl ml-5 cursor-pointer'><FcCallback /></p>
    <p className='text-3xl ml-5 cursor-pointer'><FcHome /></p>
    
    </div>

    
     
    </div>

    <div className='w-1/2 ml-10 flex flex-col'>
     <p>Our Social Media:</p>
    <div className='flex mt-2 '>
    <p className='text-3xl  cursor-pointer'><FaFacebook /></p>
    <p className='text-3xl ml-5 cursor-pointer'><FaLinkedin /></p>
    <p className='text-3xl ml-5 cursor-pointer'><FaInstagram /> </p>
    
    </div>

    
     
    </div>

    <div className='w-1/2 flex justify-around '>
        <button className='cursor-pointer  hover:underline  ' onClick={()=>navigate('/')}>Home</button>
        <button className='cursor-pointer hover:underline' onClick={()=>navigate('/bookcall')}>BookCounseling</button>
        <button className='cursor-pointer hover:underline' onClick={() => navigate("/contact")}>Contact-Us</button>
        <button className='cursor-pointer hover:underline' onClick={() => navigate("/services")}>Services</button>
        
        
    </div>
  </div>
  )
}

export default Footer
