import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const items = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data;
    console.log(items.results);
    setItems(items.results);
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <h3 key={item.name}>
            <Link to={`/shop/${item.name}`}>{item.name}</Link>
          </h3>
        );
      })}
    </div>
  );
}

export default Shop;
