import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text); // Pass the search query to the parent component
  };

  return (
    <section className='search'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={handleChange}
          autoFocus
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
