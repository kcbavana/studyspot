import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";

const Container = styled.div`
  width: 100%;
  background: white;

  .header {
    background-image: url("/images/cover.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(0.5);
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
        <img className="logo" src="/images/logo-better.png" alt="" />
        <h1 className="title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
          laudantium!
        </h1>
      </div>
    </Container>
  );
}
