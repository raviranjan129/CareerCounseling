
import axios from './../../config/axiosConfig';


export const bookCounselingRequest = async ({ name, email, phone, dateTime, message }) => {
    try {
        const response = await axios.post('/booking', {
            name,
            email,
            phone,
            dateTime,
            message
        });

        return response.data; 
    } catch (error) {
        console.error("Error booking counseling:", error);
        throw error.response?.data || { message: "Something went wrong" };
    }
};
