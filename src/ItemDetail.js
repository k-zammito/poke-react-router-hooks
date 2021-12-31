import React, { useState, useEffect } from 'react';
import './App.css';

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    sprites: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img height="150rem" src={item.sprites.front_default} alt="" />
    </div>
  );
}

export default Item;
