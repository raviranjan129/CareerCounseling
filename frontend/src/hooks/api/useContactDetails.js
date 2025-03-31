import { useMutation } from "@tanstack/react-query"
import { contactdetailsRequest } from "../../apis/contactDetails"


export const useContactDetails=()=>{
    const mutation=useMutation({
        mutationFn:contactdetailsRequest,
        onSuccess:(data)=>{
     console.log('Contact made Successfully',data);
        },
        onError:(error)=>{
            console.error("Booking failed:", error);
        }
    })
    return mutation;
}

export default useContactDetails;