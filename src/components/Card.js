import "../App.css";

export default function Card({image, name, id, description, cost}){
    return(

            <div >
                <img src={image} alt={name} width={300} height={300}/>
                <h1 id={id}>{name}</h1>
                <p>{description}</p>
                <p>Price: {cost}</p>
            </div>
        
    )
}