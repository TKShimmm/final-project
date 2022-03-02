import React, { Component } from "react";
import imgLogo from "../img/Logo.png";
import "../css/_headMenu.css"

function _headMenu() {
  return (
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
  );
}

export default _headMenu;
