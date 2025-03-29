import { createBooking, getAllBooking } from "../services/bookingService.js"
import { StatusCodes } from "http-status-codes";

export const createBookingController=async(req,res)=>{
    try {
        const Booking=await createBooking({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            message:req.body.message,
            dateTime:req.body.dateTime
        })
        return res.status(StatusCodes.CREATED).json({success:true, message:'Booking Created SuccessFully',data:Booking});
    } catch (error) {
        console.log("Booking controller Error",error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: "Error in booking consultation",
            error: error.message
    })
  }
}


export const getAllBookings=async(req,res)=>{
   try {
    const response=await getAllBooking();
    return res.status(StatusCodes.OK).json({success:true,message:'List of Bookings fetched',data:response});
   } catch (error) {
    console.log(" Fetch Booking controller Error",error);
    return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Error in fetching booking",
        error: error.message
})
   }
}