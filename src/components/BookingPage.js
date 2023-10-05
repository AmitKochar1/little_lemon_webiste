import BookingForm from "../components/BookingForm"
import { useState } from "react";
import { useReducer } from "react";          


export default function BookingPage(){
    // const  [state, dispatch] = useReducer(reducer, )
    const [time, setTime] = useState('5:00pm');
    
    const handleTime = (e) => {
        setTime(e.target.value);
    }

    return(
        <BookingForm value={time} onChange={handleTime} />
    )
}              