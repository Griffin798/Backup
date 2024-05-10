import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import Header from './components/UI/Header';
import CharacterGrid from './components/charchters/CharacterGrid';
import Search from './components/UI/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://hp-api.onrender.com/api/characters`)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <Router>
      <div className="container">
        <Header />


        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid items={items} isLoading={isLoading} searchQuery={query} />



      </div>
    </Router>
  );
};

export default App;
