import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const handleChange = (query) => {
    setText(query);
    getQuery(query);
  };

  return (
    <form className="search">
      <input
        type="text"
        placeholder="Search characters..."
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
    </form>
  );
};

export default Search;
