import { Link } from "react-router-dom";
import styled from "styled-components";
import HeadMenu from "../components/HeadMenu";
import AboutLTV from "../components/AboutComponents/About-LTV-Component";
import AboutContents from "../components/AboutContents-Unicorn";
import AboutContentsUnicorn from "../components/AboutContents-Unicorn";
import AboutContentsLTV from "../components/AboutContents-LTV";
import AboutContentsFAQ from "../components/AboutContents-FAQ";

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
