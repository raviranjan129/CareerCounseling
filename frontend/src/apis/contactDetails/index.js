
import axios from "../../config/axiosConfig";

export const contactdetailsRequest=async({name,email,phone,message})=>{
try {
    const response=await axios.post('/contact',{
        name,
        email,
        phone,
        message
    });

    return response.data; 
} catch (error) {
    console.error("Error in Contact api:", error);
        throw error.response?.data || { message: "Something went wrong" };
}
}