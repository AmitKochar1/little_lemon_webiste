import BookingForm from "../components/BookingForm";
import Navbar from "../components/Nav";
import { useReducer } from "react";

export default function Reservation(){

    function updateTimes(date) {
        return fetchAPI(date);
      }
    
    const initializeTimes = fetchAPI(new Date());
    
    //   const [availableTimes, dispatch] = useReducer(updateTimes, output);

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    
    return(
        <>
        <Navbar/>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </>
        
    )
}