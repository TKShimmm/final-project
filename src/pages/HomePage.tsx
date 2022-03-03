import React from "react";
import { ReactDOM } from "react";
import HeadMenu from "../components/HeadMenu";
import HomeContents from "../components/HomeContents";
import Base from "../components/Base";

const HomePage = (props: any) => {
  return (
    <div>
      <Base>
        <HeadMenu>
          <br />
          <HomeContents></HomeContents>
        </HeadMenu>
      </Base>
    </div>
  );
};

export default HomePage;
