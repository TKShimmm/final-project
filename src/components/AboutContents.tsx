import React from "react";
import { ReactDOM } from "react";
import styled from "styled-components";
import ImgAbout from "../img/About_img.png";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
            efficitur neque.
            <br />
            Ornare elit maecenas libero, facilisi ultricies condimentum amet,
            pharetra mi. Parturient augue sit facilisis amet. Ut tempus, id
            lorem non nulla. Iaculis feugiat nec eu eget ultrices. Ut praesent
            morbi pretium pellentesque eget morbi leo, eget aliquam. Fringilla
            sed sed lacus, luctus mattis egestas massa fermentum, enim. Morbi
            lacus non eu lobortis vitae dui metus. Venenatis, venenatis
            porttitor eget volutpat gravida commodo fringilla. Arcu ultrices
            quam eget mauris est etiam vitae. Fusce egestas tortor aenean rutrum
            ac odio.
            <br />
            Ornare elit maecenas libero, facilisi ultricies condimentum amet,
            pharetra mi. Parturient augue sit facilisis amet. Ut tempus, id
            lorem non nulla. Iaculis feugiat nec eu eget ultrices. Ut praesent
            morbi pretium pellentesque eget morbi leo, eget aliquam. Fringilla
            sed sed lacus, luctus mattis egestas massa fermentum, enim. Morbi
            lacus non eu lobortis vitae dui metus. Venenatis, venenatis
            porttitor eget volutpat gravida commodo fringilla. Arcu ultrices
            quam eget mauris est etiam vitae. Fusce egestas tortor aenean rutrum
            ac odio.
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
  width: 181px;
  height: 100px;
  position: absolute;
`;

const NavContents = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: #000;
`;

const Contents = styled.div`
  /* border: 1px solid black; */
  width: 840px;
  height: 490px;
  position: absolute;
  right: 0;
  top: 58px;
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
