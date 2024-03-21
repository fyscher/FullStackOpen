import ShowButton from "./ShowButton";

const Country = ({id, name, handleCard}) => 
{
    return ( // make a state in App.jsx then return state with a bunch of new info?
        <li key={id}>
            {name}
            <ShowButton handleCard={handleCard}/>
        </li>  
    )
}

export default Country;
