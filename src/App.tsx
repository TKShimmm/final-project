import React from "react";
import "./index.css";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HeadMenu from "./components/Home/common/HeadMenu";
import Navigation from "./components/Home/common/Navigation";
import HomeContents from "./components/Home/Main/HomeContents";
import AboutFAQ from "./components/Home/About/AboutFAQ"
import AboutLTV from "./components/Home/About/AboutLTV"
import AboutUnicorn from "./components/Home/About/AboutUnicorn"
import Footer from "./components/Home/common/Footer";

const App = (): JSX.Element => {
  return (
    <>
      <AboutPage/>
    </>
  );
};

export default App;
