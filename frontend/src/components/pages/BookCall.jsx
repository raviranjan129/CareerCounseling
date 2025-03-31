import React, { useState } from "react";
import useBookCounseling from "../../hooks/api/usebookcounseling";


const BookCall = () => {
  const { mutate: bookCounseling, isLoading } = useBookCounseling();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateTime: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bookCounseling(formData,{
        onSuccess:()=>{
            setFormData({
                name:"",
                email:"",
                phone:"",
                dateTime:"",
                message:"",
            })
        }
    }); 
  };

  return (
    <div className="bg-gradient-to-r from-orange-100 via-red-200 to-pink-300"

    >
     
      <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
    >
     <h1 className="text-4xl mb-4">Book Your Conseling!! </h1>

      {/* name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name} 
          placeholder="Enter your name"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* email */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email} 
          placeholder="Enter your email"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone} 
          placeholder="Enter your phone number"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* DateTime */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          Preferred Date & Time
        </label>
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime} 
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Message */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message} 
          placeholder="Write your message"
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full bg-blue-500 text-white font-semibold py-3 rounded-md transition-all ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        {isLoading ? "Booking..." : "Book Now"}
      </button>
    </form>
    </div>
  );
};

export default BookCall;
