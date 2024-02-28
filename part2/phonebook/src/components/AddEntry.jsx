const AddEntry = ({
    newName,
    newNumber,
    handleAddEntry,
    handleNameChange,
    handleNumberChange
}) =>
{
    return (
        <>
            <h3>New Entry:</h3>
            <form onSubmit={handleAddEntry}>
                <div>
                name: <input 
                    value={newName}
                    onChange={handleNameChange} />
                </div>
                <div>
                number: <input 
                    value={newNumber}
                    onChange={handleNumberChange} />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </>    
    )
}

export default AddEntry;