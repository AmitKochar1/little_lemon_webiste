import pastaArr from "../data/pastaData";
import "../App.css";
import Card from "./Card";

export default function Dishes(){
    return(
        <Card>
                {pastaArr.map(({id, name, description, cost, image}) => (
                    <>
                    <img src={image} alt={name} width={300} height={300} className="articleImg"/>
                    <h1 id={id}>{name}</h1>
                    <p>{description}</p>
                    <p>{cost}</p>
                    </>
                ))}
        </Card>
    )
}