import { contactRepository } from "../repositories/contactusRepository.js";
import { sendContactConfirmationEmail } from "./emailService.js";

export const ContactServices = async(data) => {
    try { 
        const contact = await contactRepository.create(data);
        console.log(contact);
        await sendContactConfirmationEmail(data.email, data.name);
        return contact;
    } catch (error) {
        throw new Error("Error in Contact Service");
    }
}