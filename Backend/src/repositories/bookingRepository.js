import crudRepository from "./crudRepository.js";
import Booking from "../schema/bookingSchema.js"

export const BookingRepository={
    ...crudRepository(Booking)
}