import React from "react";
import "./index.css";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HeadMenu from "./components/HeadMenu";
import Navigation from "./components/Navigation";
import HomeContents from "./components/HomeContents";
import AboutContents from "./components/AboutContents-LTV";
import FAQComponents from "./components/AboutFAQComponents/FAQComponents"

const App = (): JSX.Element => {
  return (
    <>
      <FAQComponents />
    </>
  );
};

export default App;
