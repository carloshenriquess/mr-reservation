import React from 'react';
import './styles.scss';

import logo from '../../assets/kaori.jpg';

const Home = () => {
  return <>
    <div className="l-home__title">
      <h1 className="c-home__title">A Simple Landing Page</h1>
    </div>
    <div className="l-home__img">
      <img className="c-home__img" src={logo} alt="Arima" />
    </div>
    <div className="l-home__btn">
      <button className="c-home__btn">RESERVE A TABLE</button>
    </div>
  </>
}

export default Home;