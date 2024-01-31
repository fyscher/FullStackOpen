import { useState } from "react";

const Search = () =>
{
    const [searchName, setSearchName] = useState('');

    const handleSearch = event => setSearchName(event.target.value)
    
    return (
        <div>
            <h3>Search</h3>
            <div>
                First Name: <input
                    value={searchName}
                    onChange={handleSearch} />
            </div>
        </div>
    )
}

export default Search;