import React, { useState } from 'react';

import { fetchJokebyCategory } from '../gateWay/gateWay';

const RandomOneJoke = () => {
  const [category, setCategory] = useState('');
  const [randomJoke, setRandomJoke] = useState('');

  const categoryHandler = event => {
    setCategory(event.target.value);
  };

  const randomJokeByCategory = () => {
    const isRandom = category === '' ? 'nerdy,explicit' : category;
    fetchJokebyCategory(isRandom).then(joke => setRandomJoke(joke.value.joke));
  };
  return (
    <>
      <div className="section__joke">
        <select onChange={categoryHandler}>
          <option value="nerdy,explicit">Random</option>
          <option value="nerdy">Nerdy</option>
          <option value="explicit">Explicit</option>
        </select>
        <button onClick={randomJokeByCategory}>Get Joke</button>
      </div>
      <div className="section__random-joke">{randomJoke}</div>
    </>
  );
};

export default RandomOneJoke;
