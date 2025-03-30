import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate();
  return (
    <div className='flex w-full font-bold items-center bg-red-400 h-[70px]'>
      <div className='w-1/2 ml-10'>logo</div>
      <div className='w-1/2 flex justify-around'>
          <button className='cursor-pointer' onClick={()=>navigate('/')}>Home</button>
          <button className='cursor-pointer' onClick={()=>navigate('/bookcall')}>BookCall</button>
          <button className='cursor-pointer' onClick={() => navigate("/contact")}>Contact-Us</button>
          <button className='cursor-pointer' onClick={() => navigate("/services")}>Services</button>
          <button className='cursor-pointer' onClick={() => navigate("/aboutus")}>About-Us</button>
          
      </div>
    </div>
  )
}

export default Header
