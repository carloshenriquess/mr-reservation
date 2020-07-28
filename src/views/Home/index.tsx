import './styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import aqua from '../../assets/aqua.gif';

const Home = () => {
  return (
    <div className="l-home">
      <img className="c-home__img" src={aqua} alt="Aqua" />
      <div className="l-home__btn">
        <Link className="c-home__btn" to="/tables">RESERVE A TABLE</Link>
      </div>
    </div>
  );
}

export default Home;