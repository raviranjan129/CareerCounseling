import transporter from "../config/mailConfig.js";
import { MAIL_ID } from "../config/serverConfig.js";

export const sendBookingConfirmationEmail = async (email, name,dateTime) => {
  try {
    const mailOptions = { // this is option like from where to whom send mail
      from:MAIL_ID, 
      to: email,
      subject: "Counseling Booking Confirmation",
      html: `<h2>Dear ${name},</h2>
             <p>Thank you for booking a counseling session on ${dateTime}, We will connect with you on booked Date.</p>
             <p>Best Regards,</p>
             <p>Career Counseling Team</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Booking confirmation email sent.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};



export const sendContactConfirmationEmail=async(email,name)=>{
    try {
        const mailOptions={
            from:MAIL_ID,
            to:email,
            subject:"Contact details received confirmation",
            html:`<h2>Dear ${name},</h2>
            <p>Thank you for showing interest, we will connect as soon as possible </p>
            <p>Best Regards,</p>
            <p>Career Counseling Team</p>
            `
            
        }
        await transporter.sendMail(mailOptions);
    console.log("Booking confirmation email sent.");
    } catch (error) {
        console.error("Error sending email:", error);
    }
}