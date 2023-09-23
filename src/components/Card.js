import { Children } from "react";
import "../App.css";

export default function Card({children}){
    return(
        <div className="card">
            {Children}
        </div>
    )
}