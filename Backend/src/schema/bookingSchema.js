import mongoose from "mongoose";


const bookingSchema=new mongoose.Schema(
    {
    name:{
        type: String,
            required: [true, "Name is required"], 
            trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        
        minLength: 6,
        trim: true,
        validate: {
            validator: function (emailValue) {
                return /^[\w.-]+@[\w.-]+\.\w{2,3}$/.test(emailValue); 
            },
            message: "Invalid email format"
        }
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
        validate: {
            validator: function (phoneValue) {
                return /^[0-9]{10}$/.test(phoneValue); 
            },
            message: "Invalid phone number format"
        }
    },
    dateTime:{
        type:Date,
        required:true
    },
    message:{
        type:String
    }
},
{ timestamps: true }
)

export default mongoose.model("Booking",bookingSchema);