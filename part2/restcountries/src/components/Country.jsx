const Country = ({id, name, handleCard}) => 
{
    return ( 
        <li id={id}>
            {name}
            <button id={id} onClick={handleCard}>Show</button>
            <div id={id}></div>
        </li>
    )
}

export default Country;
