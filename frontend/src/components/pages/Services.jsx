import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* our service section like banner type  */}
 <div className="relative w-full bg-gradient-to-r from-green-100 via-teal-200 to-green-400 ">
            <div className="container mx-auto px-4 py-4 md:py-6">
       <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 font-bold hover:underline transition-all duration-300">
                           Our Services
                       </h1>
                   <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
                           Comprehensive career guidance and support for your future success
                        </p>
            </div>
         </div>
                
                
              </div>

           {/** */}

        <div className="bg-gradient-to-r from-green-100 via-teal-200 to-green-400 min-h-screen py-8 px-4 md:px-8">
                {/* Admission Guidance Section */}
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 py-8 md:py-12 items-center">
       <div className="w-full lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          Admission Guidance & Career Counseling
       </h2>
       <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
         Our career counseling organization is dedicated to guiding students toward their dream careers. With expert advice, we help students choose the right courses, universities, and career paths that align  
              with their passion and potential.
            </p>
    <p className="text-base sm:text-lg text-gray-600">
          We believe in every student's potential and strive to provide personalized guidance that ensures success in their academic and professional journey.
            </p>
          </div>
     <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
          src="../../../Screenshot 2025-04-01 121224.png"
      alt="Admission Guidance"
          className="w-full max-w-sm sm:max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
         />
       </div>
  </div>

                {/* Scholarship Assistance Section */}
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 py-8 md:py-12 items-center">

                <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
              src="../../../Screenshot 2025-04-01 122332.png"
              alt="Scholarship Assistance"
              className="w-full max-w-sm sm:max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          </div>


      <div className="w-full lg:w-1/2">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
            Scholarship Assistance
      </h2>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
    At <strong>Career Counseling</strong>, we believe financial constraints should never hinder a student's education.  
      Our Scholarship Assistance program helps students explore, apply for, and secure the best scholarship  
      opportunities available based on their academic achievements, financial background, and career aspirations.
    </p>
    <div className="space-y-4">
       <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Our Scholarship Services:</h3>
       <ul className="space-y-3 text-base sm:text-lg text-gray-600">
           <li className="flex items-center">
            
         Personalized Scholarship Matching based on academic merit & financial need
                </li>
                <li className="flex items-center">
                  
          Guidance on Application Processes & Requirements
        </li>
           <li className="flex items-center">
        
          Essay & Statement of Purpose Assistance
                </li>
              </ul>
            </div>
          </div>
         
        </div>

                {/* Resume Building Section */}
                      
 <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12 py-8 md:py-12 items-center">
         
     <div className="w-full lg:w-1/2">
       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
             Resume Building & Interview Prep
   </h2>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
        At <strong>Career Counseling</strong>, we empower students and professionals to 
    <strong> stand out in the competitive job market </strong> through expertly crafted resumes and interview coaching.
      </p>
       <div className="space-y-6">

    <div>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Professional Resume Building</h3>
          <ul className="space-y-3 text-base sm:text-lg text-gray-600">
                  <li className="flex items-center">
                    
                  <strong>Customized Resumes</strong> tailored to different industries and roles
                  </li>
           <li className="flex items-center">
             
              <strong>Keyword Optimization</strong> to pass ATS screenings
            </li>
         <li className="flex items-center">
            
          <strong>Clear, Concise Formatting</strong> that grabs recruiter attention
          </li>
      </ul>
  </div>
  </div>
  </div>

  <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img
              src="../../../Screenshot 2025-04-01 121927.png"
              alt="Resume Building"
              className="w-full max-w-sm sm:max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          </div>

  </div>

               

                {/* Footer Section */}
               <div className="flex flex-col items-center justify-center py-8">
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold italic mb-8">
                      "Your Future, Our Priority!"
                    </p>
                    <button 
                      onClick={() => navigate('/bookcall')} 
                        className="bg-red-400 px-8 py-4 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer font-boldtext-white shadow-lg hover:bg-red-500"
                    >
                        Book Counseling Now
                   </button>
         </div>
             </div>
     </>
     );
};

   export default Services;
