// import React from 'react';
import './Main.scss';
import lens from '../assets/lens.png'

const Main = () => {
  return (
    <main>
      <h2>Take your ideas to the next level</h2>
      <img className='cover-img' src={lens} alt="Lente de cámara" />
    </main>
  );
};

export default Main;