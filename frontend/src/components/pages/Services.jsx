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
         <div className="flex flex-col lg:flex-row gap-8 py-8">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hover:underline">
                         Admission Guidance & Career Counseling
                        </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            Our career counseling organization is dedicated to guiding students toward their dream careers.  
                           With expert advice, we help students choose the right courses, universities, and career paths that align  
                            with their passion and potential.  
                        </p>
                   <p className="mt-4 text-base md:text-lg text-gray-700">
                            We believe in every student's potential and strive to provide personalized guidance  
                        that ensures success in their academic and professional journey.  
                         </p>
             </div>

             <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            className="rounded-2xl shadow-xl w-full max-w-md transition-transform duration-300 hover:scale-105"
                            src="../../../Screenshot 2025-03-31 150645.png" 
                          alt="Admission Guidance"
                        />
                      </div>
              </div>

                {/* Scholarship Assistance Section */}
     <div className="flex flex-col-reverse lg:flex-row gap-8 py-8">
             <div className="w-full lg:w-1/2 flex flex-col justify-center">
                       <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hover:underline">
                            Scholarship Assistance
                           </h2>
                 <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            At <strong>Career Counseling</strong>, we believe financial constraints should never hinder a student's education.  
                            Our Scholarship Assistance program helps students explore, apply for, and secure the best scholarship  
                            opportunities available based on their academic achievements, financial background, and career aspirations.
                       
                       
                        </p>

                     <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Scholarship Services:</h3>
                 <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
                        <li>Personalized Scholarship Matching based on academic merit & financial need.</li>
                            <li>Guidance on Application Processes & Requirements to increase selection chances.</li>
                       <li>Essay & Statement of Purpose Assistance to create impactful applications.</li>
                            <li>Interview Coaching for scholarship selection rounds.</li>
                 <li>Assistance in Government, Private & University Scholarships globally.</li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            className="rounded-2xl shadow-xl w-full max-w-md transition-transform duration-300 hover:scale-105"
                            src="../../../Screenshot 2025-03-31 163944.png" 
                            alt="Scholarship Assistance"
                        />
                    </div>
                </div>

                {/* Resume Building Section */}
                <div className="flex flex-col lg:flex-row gap-8 py-8">
             <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hover:underline">
                         Resume Building & Interview Prep
                    </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        At <strong>Career Counseling</strong>, we empower students and professionals to 
                          <strong> stand out in the competitive job market </strong> through expertly crafted resumes and interview coaching.
                  </p>

             <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-2">Professional Resume Building</h3>
                 <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
                     <li><strong>Customized Resumes</strong> tailored to different industries and roles.</li>
                        <li><strong>Keyword Optimization</strong> to pass ATS screenings.</li>
                      <li><strong>Clear, Concise Formatting</strong> that grabs recruiter attention.</li>
                        <li><strong>Personalized Cover Letters</strong> to strengthen job applications.</li>
            </ul>

                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-2">Expert Interview Preparation</h3>
                        <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
                    <li><strong>Mock Interviews</strong> with industry experts for real-time feedback.</li>
                       <li><strong>Behavioral & Technical Question Training</strong> for specific job roles.</li>
                          <li><strong>Confidence & Communication Coaching</strong> to help you speak with clarity.</li>
                            <li><strong>Body Language & Professional Etiquette Guidance</strong> for a great first impression.</li>
                       </ul>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            className="rounded-2xl shadow-xl w-full max-w-md transition-transform duration-300 hover:scale-105"
                            src="../../../Screenshot 2025-03-31 163025.png" 
                            alt="Resume Building"
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
