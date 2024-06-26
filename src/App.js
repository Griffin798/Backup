import React, {useState , useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Header from './components/UI/Header';
import CharacterGrid from './components/charchters/CharacterGrid';
import Search from './components/UI/Search';

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

  return    <div className="container"> 
    <Header/>
    <Search getQuery={(q) => setQuery(q) } />
    <CharacterGrid isLoading={isLoading} items= {items} />
   </div>
}

export default App;
