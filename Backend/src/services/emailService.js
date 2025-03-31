import transporter from "../config/mailConfig.js";

export const sendBookingConfirmationEmail = async (email, name) => {
  try {
    const mailOptions = {
      from: process.env.MAIL_ID, 
      to: email,
      subject: "Counseling Booking Confirmation",
      html: `<h2>Dear ${name},</h2>
             <p>Thank you for booking a counseling session. We will connect with you soon.</p>
             <p>Best Regards,</p>
             <p>Career Counseling Team</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Booking confirmation email sent.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
