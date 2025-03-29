import express from 'express';
import bookingRouter from './booking.js'

const router=express.Router();

router.use('/booking',bookingRouter);


export default router;