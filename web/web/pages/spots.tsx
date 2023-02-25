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

  p {
    display: block;
    font-size: 15px;
    margin: 10px auto 10px auto;
    text-align: center;
    color: black
    
  }

  div {
    border: 5px solid;
    display: flex;
    text-align: center;
    color: black;
    padding: 50px;
    font-family: "Lucida Console", "Courier New", monospace;
  }

  form {
    align: center;
    display: inline-block;
  }
  label {
    align : center;
        
  }
  input {
    color: pink;
    background-color: purple;
    align: center;
  }

  .cta .cta-button {
		color: #590880;
		text-transform: uppercase;
		border: 2px solid #590880;
		border-radius: 50px;
		background: white;
}

ul {
  color: black;
}

  color: white;

`;

export default function spots() {
    let ids = ['01', '02', '03'];
  return (
    <Container>
      <img src="/images/logo-better.png" alt="" />
      <h2>One stop destination to study together.</h2>
      <ul>
        <li><a href = "spots.tsx">SPOTS</a></li>
      </ul>
      <div style={{padding: '1rem'}}>
      <h1>Jam: My own Clubhouse!!!!</h1>
      </div>
    </Container>
);
}

//   );
//         }

