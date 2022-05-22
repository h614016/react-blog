import React from 'react';
import logo from './logo.svg';// eslint-disable-line no-unused-vars
import './App.scss'

function App() {
  let posts = '강남 고기 맛집'

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3>{posts}</h3>
        <p>2월 17일 발행</p>
        <hr /> {/* 수평선 */}
      </div>
    </div>
  );
}

export default App;
