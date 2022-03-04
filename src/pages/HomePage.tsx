import React from "react";
import { ReactDOM } from "react";
import HeadMenu from "../components/HeadMenu";
import HomeContents from "../components/HomeContents";
import Navigation from "../components/Navigation";

const HomePage = () => {
  return (
    <>
      <HeadMenu></HeadMenu>
      <HomeContents></HomeContents>
      <Navigation></Navigation>
    </>
  );
};

export default HomePage;
