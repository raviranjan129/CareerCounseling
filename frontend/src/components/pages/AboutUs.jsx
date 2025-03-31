import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const navigate=useNavigate();
  return (
   <>
     <div className="flex justify-center items-center h-[60px] w-full bg-gradient-to-r from-green-100 via-teal-200 to-green-400 shadow-lg">
        <h1 className="text-5xl text-gray-700 font-semibold hover:underline transition-all duration-300">
          About-Us
        </h1>
      </div>

      <div className="bg-gradient-to-r from-green-100 via-teal-200 to-green-400 py-16 px-10">
  <div className="max-w-6xl mx-auto text-center">
    
    <p className="text-xl text-gray-700 leading-relaxed">
      At <strong>Career Counseling</strong>, we are passionate about helping students and professionals  
      discover their true potential and build successful careers. With expert guidance,  
      personalized mentoring, and industry insights, we empower individuals to make confident career choices  
      and achieve their dreams.
    </p>
  </div>

  
  <div className="mt-10 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4"> Our Vision</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        To be the leading career guidance organization that shapes futures and transforms lives  
        by providing the best career counseling, scholarship support, and skill-building programs.
      </p>
    </div>
    <div className="md:w-1/2 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4"> Our Mission</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        We aim to bridge the gap between students and their dream careers by offering:  
      </p>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li>Personalized Career Counseling & Guidance</li>
        <li>Admission Assistance & Scholarship Support</li>
        <li>Resume Building & Interview Preparation</li>
        <li>Professional Skill Development Training</li>
        <li>Job & Internship Placement Assistance</li>
      </ul>
    </div>
  </div>

  
  <div className="mt-16 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-6"> Our Key Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2"> Career Counseling</h3>
        <p className="text-lg text-gray-700">
          Expert guidance to help students & professionals choose the right career path based on their skills,  
          interests, and future aspirations.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2"> Admission & Scholarship Assistance</h3>
        <p className="text-lg text-gray-700">
          Helping students secure admissions & scholarships in top universities across the globe.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2"> Resume Building & Interview Prep</h3>
        <p className="text-lg text-gray-700">
          Providing professional resume writing, mock interviews, and job preparation coaching to  
          boost employability.
        </p>
      </div>
    </div>
  </div>

  
  <div className="mt-16 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-6"> Why Choose Us?</h2>
    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
      With a team of experienced career advisors, industry experts, and mentors, we provide a holistic  
      approach to career success. Our personalized career guidance, cutting-edge career resources,  
      and expert mentoring ensure that every student is ready for the future.
    </p>
    <div className="mt-6">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-700">
        <li className="bg-white p-4 rounded-lg shadow-md"> 100% Personalized Career Guidance</li>
        <li className="bg-white p-4 rounded-lg shadow-md"> Industry-Specific Training & Coaching</li>
        <li className="bg-white p-4 rounded-lg shadow-md"> Expert Mentorship & Career Planning</li>
        <li className="bg-white p-4 rounded-lg shadow-md"> Global Scholarship Opportunities</li>
        <li className="bg-white p-4 rounded-lg shadow-md"> Guaranteed Interview Coaching</li>
        <li className="bg-white p-4 rounded-lg shadow-md"> A Trusted Network of Industry Professionals</li>
      </ul>
    </div>
  </div>

  
  <div className="mt-16 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4"> Start Your Career Journey with Us!</h2>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
      Don't let confusion or financial limitations hold you back. Get expert guidance, scholarships, and career  
      coaching today!  
    </p>
    <button
      className="mt-6 bg-red-500 text-white px-6 py-3 text-xl font-semibold rounded-lg shadow-lg hover:bg-red-600 transition"
      onClick={() => navigate('/BookCall')}
    >
      Book a Free Career Counseling Session
    </button>
  </div>
</div>

   </>
  )
}

export default AboutUs
