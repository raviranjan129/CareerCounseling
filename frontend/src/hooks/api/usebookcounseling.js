import { useMutation } from "@tanstack/react-query";
import { bookCounselingRequest } from "../../apis/bookCounseling";


const useBookCounseling = () => {
  const mutation = useMutation({
    mutationFn: bookCounselingRequest,
    onSuccess: (data) => {
      console.log("Booking successful!", data);
     
    },
    onError: (error) => {
      console.error("Booking failed:", error);
      
    },
  });

  return mutation; 
};

export default useBookCounseling;
