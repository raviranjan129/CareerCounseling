import React from 'react';

import { useNavigate } from 'react-router-dom';

const Services = () => {

    const navigate=useNavigate();
  return (
    <>
     
      <div className="flex justify-center items-center h-[60px] w-full bg-gradient-to-r from-green-100 via-teal-200 to-green-400 shadow-lg">
        <h1 className="text-5xl text-gray-700 font-semibold hover:underline transition-all duration-300">
          Our Services..
        </h1>
      </div>

      
      <div className=" bg-gradient-to-r from-green-100 via-teal-200 to-green-400 min-h-screen h-auto">
       
           <div className='flex pt-10'>
        <div className="w-1/2 flex flex-col justify-center pl-10 ">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:underline"> Admission Guidance & Career Counseling</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our career counseling organization is dedicated to guiding students toward their dream careers.  
            With expert advice, we help students choose the right courses, universities, and career paths that align  
            with their passion and potential.  
          </p>
          <p className="mt-4 text-lg text-gray-700">
             We believe in every student's potential and strive to provide personalized guidance  
            that ensures success in their academic and professional journey.  
          </p>
          
        </div>

        <div className="w-1/2 flex justify-center items-center mt-10">
          <img
            className="rounded-2xl shadow-xl w-[80%] transition-transform duration-300 hover:scale-105"
            src="../../../Screenshot 2025-03-31 150645.png" 
            alt="Admission Guidance"
          />
        </div>


        </div>


        
       {/**Scholarship Assistance dvi */} 

        <div className='flex pt-10'>
        <div className="w-1/2 flex flex-col justify-center pl-10">
  <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:underline">
 Scholarship Assistance  
  </h2>
  
  <p className="text-lg text-gray-700 leading-relaxed">
    At <strong>Career Counseling</strong>, we believe financial constraints should never hinder a student’s education.  
    Our Scholarship Assistance program helps students explore, apply for, and secure the best scholarship  
    opportunities available based on their academic achievements, financial background, and career aspirations.
  </p>

  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2"> Our Scholarship Services:</h3>
  <ul className="list-disc pl-6 text-lg text-gray-700">
    <li>Personalized Scholarship Matching based on academic merit & financial need.</li>
    <li>Guidance on Application Processes & Requirements to increase selection chances.</li>
    <li>Essay & Statement of Purpose Assistance to create impactful applications.</li>
    <li>Interview Coaching** for scholarship selection rounds.</li>
    <li>Assistance in Government, Private & University Scholarships globally.</li>
  </ul>

  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2"> Why Choose Us?</h3>
  <p className="text-lg text-gray-700 leading-relaxed">
    We are committed to helping students reduce financial burdens while accessing top-quality education.  
    Our team provides one-on-one guidance, updated scholarship databases, and expert mentorship 
    to ensure students secure the best possible funding for their studies.
  </p>

  <p className="mt-6 text-lg text-gray-700 font-semibold italic">
    "Empowering Your Dreams with Financial Support – Let’s Secure Your Future Together!"
  </p>
</div>


        <div className="w-1/2 flex justify-center items-center mt-10">
          <img
            className="rounded-2xl shadow-xl w-[80%] transition-transform duration-300 hover:scale-105"
            src="../../../Screenshot 2025-03-31 163944.png" 
            alt="Admission Guidance"
          />
        </div>


        </div>

{/**This is our resume building div */}

        <div className='flex pt-10'>
        <div className="w-1/2 flex flex-col justify-center pl-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:underline">
        Resume Building & Interview Prep
      </h2>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        At <strong>Career Counseling</strong>, we empower students and professionals to 
        <strong> stand out in the competitive job market </strong> through expertly crafted resumes and interview coaching. 
        Our goal is to help individuals <strong> highlight their strengths, showcase their skills, and make a lasting impression </strong> 
        on recruiters.
      </p>
      
      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2"> Professional Resume Building</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        A <strong> well-structured resume </strong> is the first step toward landing your dream job. Our expert team provides:
      </p>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li> <strong>Customized Resumes</strong> tailored to different industries and roles.</li>
        <li> <strong>Keyword Optimization</strong> to pass ATS (Applicant Tracking System) screenings.</li>
        <li> <strong>Clear, Concise Formatting</strong> that grabs recruiter attention.</li>
        <li> <strong>Personalized Cover Letters</strong> to strengthen job applications.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2"> Expert Interview Preparation</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        Preparing for an interview can be overwhelming, but <strong> our structured coaching makes it easier. </strong> We offer:
      </p>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li> <strong>Mock Interviews</strong> with industry experts for real-time feedback.</li>
        <li> <strong>Behavioral & Technical Question Training</strong> for specific job roles.</li>
        <li> <strong>Confidence & Communication Coaching</strong> to help you speak with clarity.</li>
        <li> <strong>Body Language & Professional Etiquette Guidance</strong> for a great first impression.</li>
      </ul>
      
     
      
      
    </div>

    

        <div className="w-1/2 flex justify-center items-center mt-10">
          <img
            className="rounded-2xl shadow-xl w-[80%] h-[80%] transition-transform duration-300 hover:scale-105"
            src="../../../Screenshot 2025-03-31 163025.png" 
            alt="Admission Guidance"
          />
        </div>


        </div>





     <div className='flex h-[40px]  items-center ml-[400px] mt-15'>
     <p className="mt-4 text-lg text-gray-700 font-semibold italic transition-transform duration-300 hover:scale-105 underline">
            "Your Future, Our Priority!"  
          </p>
     </div>

        <div className='p-[100px]'>

        <button onClick={()=>navigate('/bookcall')} className='bg-red-400 p-6 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer font-bold'>
            Book Counseling  Now
            </button>

        </div>

      </div>

      
    </>
  );
};

export default Services;
