import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: white;
  h2 {
    display: block;
    font-weight: 900;
    width: 70rem;
    text-align: center;
    font-size: 3rem;
    margin: 20px auto 0 auto;
    padding: 20px;
    font-family: monospace;
    color: #11113b;
    letter-spacing: -2px;
  }

  img {
    width: 250px;
    display: block;
    margin-left: 50px;
    scale: 1.5;
    overflow: hidden;
    padding-top: 50px;
    margin: auto;
  }
`;

export default function home() {
  const [contents, setContents] = useState("");
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    setContents("Hello World");
  }, [contents]);

  return (
    <Container>
      <img src="/images/logo-better.png" alt="" />
      <h2>One stop destination to study together.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure
        sequi, voluptates dolor minima, hic sed illo possimus aliquam earum
        blanditiis impedit commodi magni nulla suscipit veritatis, labore
        eligendi aut!
      </p>
    </Container>
  );
}
