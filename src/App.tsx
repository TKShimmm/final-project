import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HeadMenu from "./components/HeadMenu";

const App = (): JSX.Element => {
  return (
    <div>
      <AboutPage></AboutPage>
    </div>
  );
};

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
