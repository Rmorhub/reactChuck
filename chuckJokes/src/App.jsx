import React from 'react';

import Header from './components/Header';
import RandomJokes from './components/RandomJokesList';
import RandomOneJoke from './components/RandomOneJoke';

const App = () => (
  <main className="main">
    <div className="content">
      <Header />
      <section className="section">
        <RandomOneJoke />
        <RandomJokes />
      </section>
    </div>
  </main>
);

export default App;
