import React, { useState } from 'react';
import RandomJokesListItem from './RandomJokesListItem';

import { fetchJokeBySearchText, maxValueForSlice } from '../gateWay/gateWay';

const RandomJokes = () => {
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
        const max = maxValueForSlice(res);
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
      : randomJokes.map(el => <RandomJokesListItem key={el.id} joke={el.joke} />);

  return (
    <>
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
    </>
  );
};

export default RandomJokes;
