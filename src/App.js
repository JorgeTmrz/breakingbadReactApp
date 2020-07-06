import React, {useState, useEffect} from 'react';
import axios from "axios"
import Header from "./components/ui/header.js";
import './App.css';
import CharacterGrid from "./components/characters/CharacterGrid"
import Search from "./components/ui/Search"


const App = () => {
  // items = characters that come from the Api request
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  //Making the api request
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      // setting the items = the http request
      setItems(result.data);
      setIsLoading(false);
    }
    // whenever you use a useEffect function you´ve to call it, it doenst fire by itself
    fetchItems();

  }, [query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)} />
      {/*Passing  props */}
      <CharacterGrid isLoading = {isLoading} items = {items}/>
    </div>
  );
}

export default App;
