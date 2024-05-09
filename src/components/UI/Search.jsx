import React, { useState } from 'react';
function Search ({ setResults }) {
    const [input, setInput] = useState("");
    
    const fetchData = (value) => {
        fetch(`https://hp-api.onrender.com/api/characters`)
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((id) => {
                    return (
                        id.name &&
                        id.name.toLowerCase().includes(value.toLowerCase())
                    );
                });
                 setResults(results);
                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='input-wrapper'>
            <input 
                placeholder='Type to search' 
                value={input} 
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
}

export default Search;
