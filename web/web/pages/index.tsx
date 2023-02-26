import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";

const Container = styled.div`
  width: 100%;
  background: white;

  html,
  body {
    margin: 0;
    padding: 0;
    font-style: monospace;
    scroll-behavior: smooth !important;
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
    gap: 8rem;
    flex-wrap: wrap;
  }

  .body-text {
    width: 35rem;
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

  .text-result {
    background-color: #2d3142;
    display: flex;
    align-items: center;
    padding-right: 15rem;
  }

  .text-input {
    display: flex;
    height: 55em;
    padding: 5rem 5rem 5rem 5rem;
    gap: 2rem;
    justify-content: center;
  }

  .text-input textarea {
    width: 30rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 1rem;
    color: #f8f8f8;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .assignment,
  .rubric {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .assignment-title,
  .rubric-title {
    font-size: 1.5rem;
    letter-spacing: 0.75rem;
  }

  .text-result button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  .output {
    display: flex;
    justify-content: center;
    padding: 5rem 0rem 10rem 0rem;
    background-color: #f8f8f8;
  }
  .output-content {
    background-color: rgba(240, 240, 240, 0.9);
    width: 70%;
    border-radius: 1rem;
    padding: 2rem;
  }

  .output-text,
  .grade {
    color: #1a3969;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  .grade {
    font-size: 2rem;
  }

  .output-content {
    transition: all 0.5s;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
  }
  .output-content:hover {
    transform: translateY(-0.5rem);
    background-color: rgba(250, 250, 250, 1);
    box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.08);
  }

  footer {
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.15)
      ),
      url("/images/footer2.png");
    background-position: center 0rem;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

  .members {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    padding: 5rem 0rem;
  }

  .member {
    color: white;
    font-size: 1.5rem;
    font-weight: 900;
  }
`;

export default function home() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleText1Change = (event) => {
    setText1(event.target.value);
  };

  const handleText2Change = (event) => {
    setText2(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Text 1:", text1);
    console.log("Text 2:", text2);
  };
  return (
    <Container>
      <div className="header">
        <div className="content">
          <img className="logo" src="/images/Grade_Spot_Logo.png" alt="" />
          <h1 className="title">
            Say goodbye to sleepless nights grading assignments
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
            <p className="user-count"> +1.021.593 users</p>
          </div>
          <div className="btn-container">
            <button>ASSIGNMENT</button>
            <button> RUBRIC</button>
          </div>
          <div className="grade-click">
            <a href="#text-result">&gt;&gt;&gt; Click here to start grading</a>
          </div>
        </div>
        <p className="body-text">
          GradeSpot is is a platform for automated grading that utilizes
          chatGPT, an AI-powered language model, to evaluate students'
          assignments. The website's algorithm compares the submitted text
          against the rubric's requirements to identify areas where the student
          has met or exceeded the expectations and areas where they need to
          improve. Based on the analysis, the system assigns a grade to the
          assignment and provides a detailed report outlining the strengths and
          weaknesses of the submission.
        </p>
      </div>

      <div className="text-result" id="text-result">
        <div className="text-input">
          <div className="assignment">
            <h3 className="assignment-title">ASSGINMENT</h3>
            <textarea
              value={text1}
              onChange={handleText1Change}
              style={{ flex: 1 }}
            />
          </div>
          <div className="rubric">
            <h3 className="rubric-title">RUBRIC</h3>
            <textarea
              value={text2}
              onChange={handleText2Change}
              style={{ flex: 1 }}
            />
          </div>
        </div>
        <button onClick={handleSubmit}>
          <a href="#output">GRADE</a>
        </button>
      </div>

      <div className="output" id="output">
        <div className="output-content">
          <h3 className="grade">A</h3>
          <p className="output-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            dicta tempora rerum impedit sed atque animi? At recusandae,
            excepturi molestiae rem odio, quidem modi laborum cupiditate labore
            quaerat error alias. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Pariatur, maxime neque similique incidunt dolore
            dicta perspiciatis, ipsa quidem eaque tempora, deserunt sed iusto.
            Velit est voluptates reprehenderit excepturi voluptatum dolor!
          </p>
        </div>
      </div>

      <footer>
        <div className="members">
          <a
            className="member"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/olivia-guzik/"
          >
            OLIVIA GUZIK
          </a>
          <a
            className="member"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/taita/"
          >
            TAI TA
          </a>
          <a
            className="member"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/kcbavana/"
          >
            KRISHNA BAVANA
          </a>
          <a
            className="member"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/lucien-putnam/"
          >
            LUCIEN PUTNAM
          </a>
        </div>
      </footer>
    </Container>
  );
}
