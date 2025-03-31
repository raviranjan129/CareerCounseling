import { StatusCodes } from "http-status-codes";
import { ContactServices } from "../services/contactService.js"


export const ContactController=async(req,res)=>{
   try {
    const response=await ContactServices({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message,
    });

    return res.status(StatusCodes.CREATED).json({success:true, message:'Message Created SuccessFully',data:response});
   } catch (error) {
     console.log("Contact controller Error",error);
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Error in Contact controller",
                error: error.message

     } )
   }
}