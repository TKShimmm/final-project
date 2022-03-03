import React from "react";
import styled from "styled-components";
import HeadMenu from "./HeadMenu";

const Base = (props: any) => {
  return (
    <BaseContainer>
      <HeadMenu></HeadMenu>
    </BaseContainer>
  );
};

const BaseContainer = styled.div`
  width: 1440px;
  height: 800px;
`;

export default Base;
