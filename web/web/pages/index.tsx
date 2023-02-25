import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";

const Container = styled.div`
  width: 100%;
  background: white;

  .header {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.25),
        rgba(255, 255, 255, 0.25)
      ),
      url("/images/cover.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .logo {
    width: 7rem;
    padding-top: 2rem;
  }

  .title {
    color: white;
  }
`;

export default function home() {
  return (
    <Container>
      <div className="header">
        <img className="logo" src="/images/Grade_Spot_Logo.png" alt="" />
        <h1 className="title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          laudantium!
        </h1>
      </div>
    </Container>
  );
}
