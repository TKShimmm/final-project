import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HeadMenu from "./components/HeadMenu";
import Navigation from "./components/Navigation";
import HomeContents from "./components/HomeContents";
import AboutContents from "./components/AboutContents";
import Accordion from "./components/About/Accordion"
import AccordionWrap from "./components/About/AccordionWrap";

const App = (): JSX.Element => {
  return (
    <>
      <Accordion items={}/>
    </>
  );
};

const Container = styled.div`
  width: 1440px;
  justify-content: center;
`;

export default App;

// 이렇게 했는데 라우팅이 안되는거 같은데 왜 그럴까요?
// const App = (): JSX.Element => {
//   return (
//       <HeadMenu>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </HeadMenu>
//   );
// };
