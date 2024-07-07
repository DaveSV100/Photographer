// import React from 'react';
import './Main.scss';
import lens from '../assets/lens.png'

const Main = () => {
  return (
    <main>
      <h1>Take your ideas to the next level</h1>
      
        <img className='cover-img' src={lens} alt="Lente de cámara" />

    </main>
  );
};

export default Main;