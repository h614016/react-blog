/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "남자 자켓 추천",
    "남자 이너 추천",
  ]);

  let [따봉, 따봉변경] = useState(0);
  function 여자코트추천() {
    let 새로운글제목 = [...글제목];

    if ((글제목[0] = "남자 코트 추천")) {
      새로운글제목[0] = "여자 코트 추천";
      글제목변경(새로운글제목);
    }
  }
  function 따봉업() {
    따봉변경(따봉 + 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]} <span onClick={따봉업}>👍{따봉}</span>
        </h3>
        <button onClick={여자코트추천}>글제목 변경</button>
        <p>2월 17일 발행</p>
        <hr /> {/* 수평선 */}
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr /> {/* 수평선 */}
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr /> {/* 수평선 */}
      </div>
    </div>
  );
}

export default App;
