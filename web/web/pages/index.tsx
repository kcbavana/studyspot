import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";

const Container = styled.div`
  width: 100%;
  background: white;

  html {
    font-style: monospace;
  }
  .header {
    display: flex;
    justify-content: center; /* horizontally center child elements */
    align-items: center; /* vertically center child elements */
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.15)
      ),
      url("/images/cover.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5rem 0rem 5rem 0rem;
  }

  .content {
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 9.5rem;
  }

  .title {
    color: white;
    font-size: 2.2rem;
  }

  .body {
    background: #f8f8f8;
    color: #1a3969;
    padding: 5rem 5rem 10rem 5rem;
    font-size: 1rem;
    font-weight: 900;
    display: flex;
    justify-content: center;
    gap: 10rem;
    flex-wrap: wrap;
  }

  .body-text {
    width: 30rem;
    line-height: 2.2rem;
    background-color: #f0f0f0;
    padding: 3rem;
    border-radius: 2rem;
  }

  .btn-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  button {
    flex-shrink: 0; /* The button will not shrink beyond its content size */
    padding: 0.5rem 1.75rem;
    background-color: #a64253;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 900;
    font-size: 1rem;
    color: #f8f8f8;
  }

  .body-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .body-profiles {
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
    margin-bottom: 1rem;
    align-items: center;
  }

  .user-count {
    letter-spacing: -0.05rem;
    font-weight: 1000;
    color: #838589;
  }

  .body-left img {
    border: 0.2rem solid #f8f8f8;
    width: 3rem;
    border-radius: 50%;
    gap: -1rem;
    margin-left: -1rem;
  }

  .grade-click {
    margin-top: 0.3rem;
  }
`;

export default function home() {
  return (
    <Container>
      <div className="header">
        <div className="content">
          <img className="logo" src="/images/Grade_Spot_Logo.png" alt="" />
          <h1 className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dolorem?
          </h1>
        </div>
      </div>

      <div className="body">
        <div className="body-left">
          <div className="body-profiles">
            <img src="/images/Pic1.png" alt="" />
            <img src="/images/Pic2.png" alt="" />
            <img src="/images/Pic3.png" alt="" />
            <img src="/images/Pic4.png" alt="" />
            <img src="/images/Pic6.png" alt="" />
            <img src="/images/Pic7.png" alt="" />
            <img src="/images/Pic8.png" alt="" />
            <img src="/images/Pic9.png" alt="" />
            <p className="user-count">+ 1.021.593 users</p>
          </div>
          <div className="btn-container">
            <button>ASSIGNMENT</button>
            <button> RUBRIC</button>
          </div>
          <div className="grade-click">
            <a href="#">&gt;&gt;&gt; Click here to start grading</a>
          </div>
        </div>
        <p className="body-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          iste cupiditate aliquid asperiores, illum quibusdam nulla architecto,
          rerum quo enim aut commodi dolorum vero dolores omnis explicabo atque
          alias corrupti. Hic, amet! Commodi, quisquam facere tenetur quam ea
          eveniet minus.
        </p>
      </div>
    </Container>
  );
}
