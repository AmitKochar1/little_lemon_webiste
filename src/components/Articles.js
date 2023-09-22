import pastaArr from "../data/pastaData";

export default function Articles(){
    return(
        <>
        <article className="article">
            {pastaArr.map(({id, name, description, cost, image}) => (
                <>
                <img src={image} alt={name} className="articleImg"/>
                <h1 id={id}>{name}</h1>
                <p>{description}</p>
                <p>{cost}</p>
                </>
            ))}
        </article>
        </>
    )
}