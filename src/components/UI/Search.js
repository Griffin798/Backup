import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    getQuery(text); // Pass the search query to the parent component
  };

  return (
    <section className='search'>
      <form onSubmit={onSubmit}>
        <input 
          type ='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
