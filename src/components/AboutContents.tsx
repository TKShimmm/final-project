import React from "react";
import { ReactDOM } from "react";
import styled from "styled-components";
import ImgAbout from "../img/About_img.png";
import AboutLTV from "./About-LTV";
import AboutUnicorn from "./About-Unicorn";

const AboutContents = () => {
  return (
    <Base>
      <Container>
        <Nav>
          <NavContents>유니콘이란?</NavContents>
          <NavContents>고객생애가치(LTV)란?</NavContents>
          <NavContents>FAQ</NavContents>
        </Nav>
        <Contents>
          <ContentsSpan>
            <AboutUnicorn></AboutUnicorn>
            {/* <AboutLTV></AboutLTV> */}
          </ContentsSpan>
        </Contents>
      </Container>
      <AboutImg>
        <img src={ImgAbout} alt="About_Image" />
      </AboutImg>
    </Base>
  );
};

const Base = styled.div`
  /* border: 1px solid black; */
  width: 1440px;
  height: 1050px;
  margin: 0 auto;
  position: relative;
`;

const Container = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const Nav = styled.div`
  /* display: none; */
  /* border: 1px solid black; */
  top: 58px;
  width: 200px;
  height: 100px;
  position: absolute;
`;

const NavContents = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  color: #000;
`;

const Contents = styled.div`
  /* border: 1px solid black; */
  width: 840px;
  height: 490px;
  position: absolute;
  right: 0;
  top: 48px;
`;

const ContentsSpan = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`;

const AboutImg = styled.div`
  position: absolute;
  bottom: 0;
`;

export default AboutContents;