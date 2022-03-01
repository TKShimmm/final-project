import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import imgLogo from "../src/img/Logo.png";
import imgHome from "../src/img/Home_img.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="inner">
            <a className="logo" href="/">
              <img src={imgLogo} alt="Logo" />
            </a>
            <nav className="head_menu">
              <div className="about">
                <a href="/">About us</a>
              </div>
              <div className="login">
                <a href="/">로그인</a>
              </div>
              <div className="join">
                <a href="/">회원가입</a>
              </div>
            </nav>
          </div>
        </header>
        <main>
          <div className="main_container">
            <div className="main_text_container">
              <span>당신의 유니콘은 어디쯤입니까?</span>
              <br></br>
              <span>
                내 사업이 잘 되고 있는지 확인하고 싶다면, 유니콘 판별기를
                사용해보세요.
              </span>
            </div>
            <span className="btn">유니콘 판별기 사용하기</span>
            <img src={imgHome} alt="" />
            <div className="sub_info">
              <div className="sub_1">
                <span>53 +million</span>
                <span>Company</span>
              </div>
              <div className="sub_2">
                <span>53 +million</span>
                <span>Company</span>
              </div>
              <div className="sub_3">
                <span>53 +million</span>
                <span>Company</span>
              </div>
            </div>
            <img src="" alt="" />
          </div>
        </main>
        <nav className="menu">
          <ul>
            <li>
              <a href="/">WHY</a>
            </li>
            <li>
              <a href="/">WHO</a>
            </li>
            <li>
              <a href="/">HOW</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
