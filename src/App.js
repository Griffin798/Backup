import React, {useState , useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Header from './components/UI/Header';
import CharacterGrid from './components/charchters/CharacterGrid';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://hp-api.herokuapp.com/api/characters`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, []) 

  return    <div className="container"> 
    <Header/>
    <CharacterGrid isLoading={isLoading} items= {items} />
   </div>
}

export default App;
