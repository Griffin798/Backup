// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/UI/Header';
import CharacterGrid from './components/charchters/CharacterGrid';
import Search from './components/UI/Search';
import SearchResultsList from './components/UI/SearchResultsList';
import Filter from './components/charchters/Filterform';
import CharacterForm from './components/charchters/CharacterForm';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios('https://hp-api.onrender.com/api/characters');
        setItems(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    fetchItems();
  }, [query]);
  
  

  return (
    <div className='container'>
      <Header />
      
     <Search setResults={setResults} />
     
      
      <Filter onFilter={(filteredItems) => setItems(filteredItems)} />
      <CharacterForm/>
      <CharacterGrid isLoading={isLoading} items={items} />
      
      
    </div>
  );
};

export default App;

