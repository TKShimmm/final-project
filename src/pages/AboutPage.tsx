import { Link } from "react-router-dom";
import styled from "styled-components";
import HeadMenu from "../components/Home/common/HeadMenu";
import AboutLTV from "../components/Home/About/AboutComponentsContents/About-LTV-Component";
import AboutContentsUnicorn from "../components/Home/About/AboutUnicorn";
import AboutContentsLTV from "../components/Home/About/AboutLTV"
import AboutContentsFAQ from "../components/Home/About/AboutFAQ";

const About = () => {
  return (
    <>
      <AboutContentsUnicorn />
      <AboutContentsLTV />
      <AboutContentsFAQ />
    </>
  );
};

export default About;
