const Search = ({
    search,
    handleSearch
}) =>
{
    return <input value={search} onChange={handleSearch} placeholder='Find Countries...' />
}

export default Search;