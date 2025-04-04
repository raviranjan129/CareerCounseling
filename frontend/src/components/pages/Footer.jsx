import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FcCallback, FcHome } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
<footer className="bg-gradient-to-r from-green-400 to-green-500 py-6 md:py-8">
       <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Contact Section todo-> real implementation */}
              <div className="w-full md:w-1/3 text-center md:text-left">
               <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Contact Us</h3>
               <div className="flex justify-center md:justify-start space-x-6">
                 <a  className="text-2xl md:text-3xl text-white hover:text-green-100 transition-colors duration-300 cursor-pointer">
                        <MdAttachEmail />
                </a>
                 <a  className="text-2xl md:text-3xl text-white hover:text-green-100 transition-colors duration-300 cursor-pointer">
                                <FcCallback />
                            </a>
                    <a  className="text-2xl md:text-3xl text-white hover:text-green-100 transition-colors duration-300 cursor-pointer">
                         <FcHome />
                      </a>
                  </div>
               </div>

                    {/* Social Media access it is not follow any real link -> todo */}
   <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Follow Us</h3>
             <div className="flex justify-center space-x-6">
                  <a  className="text-2xl md:text-3xl text-white hover:text-green-100 transition-colors duration-300 cursor-pointer">
                        <FaFacebook />
                </a>
                 <a  className="text-2xl md:text-3xl text-white hover:text-green-100 transition-colors duration-300 cursor-pointer">
                        <FaLinkedin />
                </a>
            <a  className="text-2xl md:text-3xl text-white hover:text-green-100 transition-colors duration-300 cursor-pointer">
             <FaInstagram />
               </a>
          </div>
   </div>

                    
 <div className="w-full md:w-1/3 text-center md:text-right">
      <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Quick Links</h3>
      <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
               <button 
              onClick={() => navigate('/')}
                className="text-white hover:text-green-100 transition-colors duration-300 text-sm md:text-base cursor-pointer"
              >
                 Home
      </button>
     <button 
         onClick={() => navigate('/bookcall')}
             className="text-white hover:text-green-100 transition-colors duration-300 text-sm md:text-base cursor-pointer"
               >
                   Book Counseling
             </button>
             <button 
                    onClick={() => navigate("/contact")}
                    className="text-white hover:text-green-100 transition-colors duration-300 text-sm md:text-base cursor-pointer"
                      >
                          Contact Us
              </button>
              <button 
                    onClick={() => navigate("/services")}
                       className="text-white hover:text-green-100 transition-colors duration-300 text-sm md:text-base cursor-pointer"
                       >
                                Services
                           </button>
                      </div>
                 </div>
        </div>

                
    
         </div>
     </footer>
    )
}

export default Footer
