import React from 'react';
import background from "../assets/login.jpg";
import styled from "styled-components";
export default function BackgroundImage() {
  return (
    <Conatiner>
      <img src={background} alt="background"/>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
