import express from 'express';
import bookingRouter from './booking.js'
import ContactRouter from './contact.js'

const router=express.Router();

router.use('/booking',bookingRouter);
router.use('/contact',ContactRouter);


export default router;