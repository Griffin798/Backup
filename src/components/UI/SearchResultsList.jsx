import React from 'react';

function SearchResultsList({ results }) {
    if (results.length === 0) {
        return null;
    }
  return (
    <div className='results-list'>
      {results.map((result, id) => (
        <div 
        key={id}>{result.name}
        <img src={result.image} alt={result.name}/>
        </div>
      ))}
    </div>
  );
}

export default SearchResultsList;
