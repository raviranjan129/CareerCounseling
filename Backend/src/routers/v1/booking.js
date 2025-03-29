import express from 'express';
import { createBookingController, getAllBookings } from '../../controller/bookingController.js';


const router=express.Router();

router.post('/',createBookingController);

router.get('/',getAllBookings);
export default router;