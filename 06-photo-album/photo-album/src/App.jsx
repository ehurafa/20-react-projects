import { useState, useEffect } from "react";

import DetailedPhoto from './components/DetailedPhoto';
import PhotoList from './components/PhotoList';
import Searchbar from './components/Searchbar';

import axios from "axios";

function App() {

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const fetchData = async({ query, category }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params: {
        client_id: apiKey
      }
    });

    console.log(response)
  };

  useEffect(() => {
    fetchData(query, category);
  }, []);

  return (
    <div className="container">
      <Searchbar />
      <PhotoList />
      <DetailedPhoto />
    </div>
  )
}

export default App
