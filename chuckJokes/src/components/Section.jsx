import React, { useState } from 'react';

import { fetchJokebyCategory, fetchJokeBySearchText } from '../gateWay/gateWay';

const Section = () => {
  const [category, setCategory] = useState('');
  const [randomJoke, setRandomJoke] = useState('');

  const categoryHandler = event => {
    setCategory(event.target.value);
  };

  const randomJokeByCategory = () => {
    const isRandom = category === '' ? 'nerdy,explicit' : category;
    fetchJokebyCategory(isRandom).then(joke => setRandomJoke(joke.value.joke));
  };

  const [inputText, setInputText] = useState('');
  const [randomJokes, setRandomJokes] = useState('');

  const searchHandler = event => {
    setInputText(event.target.value);
  };

  const searchJokeByText = () => {
    fetchJokeBySearchText()
      .then(jokes =>
        jokes.value.filter(el => el.joke.toLowerCase().includes(inputText.toLowerCase())),
      )
      .then(res => {
        const max = Math.floor(Math.random() * (res.length - 4 + 1)) + 4;
        const min = max - 5;
        const topJokes = res.slice(min, max);
        setRandomJokes(topJokes);
      });
  };

  const notFound =
    randomJokes === ''
      ? null
      : "You shouldn't have looked for it, now Chuck Norris is looking for you ;)";

  const isSomeRandomJokes =
    randomJokes.length === 0
      ? notFound
      : randomJokes.map(el => (
          <li key={el.id} className="section__random-jokes_item">
            {el.joke}
          </li>
        ));

  return (
    <section className="section">
      <div className="section__joke">
        <select onChange={categoryHandler}>
          <option value="nerdy,explicit">Random</option>
          <option value="nerdy">Nerdy</option>
          <option value="explicit">Explicit</option>
        </select>
        <button onClick={randomJokeByCategory}>Get Joke</button>
      </div>
      <div className="section__random-joke">{randomJoke}</div>
      <div className="section__joke">
        <input
          type="text"
          placeholder="enter text to find joke"
          value={inputText}
          onChange={searchHandler}
          className="section__input"
        />
        <button onClick={searchJokeByText} className="section__button">
          Search Jokes
        </button>
      </div>
      <ul className="section__random-jokes">{isSomeRandomJokes}</ul>
    </section>
  );
};

export default Section;
