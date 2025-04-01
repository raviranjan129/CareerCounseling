import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

 const navItems = [
 { name: 'Home', path: '/' },
{ name: 'BookCounseling', path: '/bookcall' },
 { name: 'Contact-Us', path: '/contact' },
     { name: 'Services', path: '/services' },
 { name: 'About-Us', path: '/aboutus' }
    ];

    return (
        <nav className="bg-red-500 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo , to do task*/}
                    <div className="flex items-center text-white font-bold text-xl md:text-2xl">
    <img 
        className='rounded-full h-10 w-10 md:h-12 md:w-12 mr-2' 
        src="../../../Screenshot 2025-04-01 152518.png" 
        alt="Mind Blowing Logo" 
    />
    Mind Blowing 
</div>

                    {/* Navigation Menu */}
 <div className="flex items-center">
                        {/* Mobile Menu Button */}
           <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-white hover:bg-red-600 rounded-md"
                 >
            <svg
          className="h-6 w-6"
           fill="none"
             viewBox="0 0 24 24"
         stroke="currentColor"
                 >
         {isMenuOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
             </svg>
     </button>

                        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-red-500 md:bg-transparent `}>
           <div className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0 ">
                     {navItems.map((item) => (
                         <button
                         key={item.name}
                           onClick={() => {
                               navigate(item.path);
                           setIsMenuOpen(false);
                                      }}
                              className="text-white hover:bg-red-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-left md:text-center cursor-pointer"
                                    >
                             {item.name}
                        </button>
                   ))}
           </div>
             </div>
         </div>
         </div>
   </div>
     </nav>
    );
};

export default Header;
