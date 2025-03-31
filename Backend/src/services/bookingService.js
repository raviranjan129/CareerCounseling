import { BookingRepository } from "../repositories/bookingRepository.js"
import { sendBookingConfirmationEmail } from "./emailService.js";

export const createBooking=async (data)=>{ //creating booking 
    try { 
        const booking=await BookingRepository.create(data);
        console.log(booking)
        await sendBookingConfirmationEmail(data.email, data.name,data.dateTime);
        return booking;
    } catch (error) {
        throw new Error("Error in booking consultation");
    }
}


export const getAllBooking=async ()=>{ // if you want to chek the all booking counseling then you can check;
    try {
        const allBooking=await BookingRepository.getAll();
        return allBooking;
    } catch (error) {
        throw new Error("Error in Fetching bookings");
    }
}