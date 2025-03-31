import express from 'express';
import { ContactController } from '../../controller/contactController.js';



const router=express.Router();

router.post('/',ContactController);


export default router;