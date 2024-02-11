const Filter = ({ 
    filter,
    handleFilter
}) =>
{
    return (
        <>
            <h3>Filter:</h3>
            <input 
                value={filter} 
                placeholder="Filter name..." 
                onChange={handleFilter}
            />
        </>
    )
}

export default Filter;