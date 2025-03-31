import { BookingRepository } from "../repositories/bookingRepository.js"
import { sendBookingConfirmationEmail } from "./emailService.js";

export const createBooking=async (data)=>{
    try {
        const booking=await BookingRepository.create(data);
        console.log(booking)
        await sendBookingConfirmationEmail(data.email, data.name);
        return booking;
    } catch (error) {
        throw new Error("Error in booking consultation");
    }
}


export const getAllBooking=async ()=>{
    try {
        const allBooking=await BookingRepository.getAll();
        return allBooking;
    } catch (error) {
        throw new Error("Error in Fetching bookings");
    }
}