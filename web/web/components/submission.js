import React, { useState } from "react";
import styled from "styled-components";

const styledContainer = styled.div`
  min-height: 200px;
`;

const StyledButton = styled.button`
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  box-shadow: 0 3px 10px rgba(30, 136, 229, 0.3);
  transition: box-shadow 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(30, 136, 229, 0.5);
  }
`;

export default function submission() {
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
    <styledContainer>
      <div style={{ display: "flex", height: "400px" }}>
        <input
          type="text"
          value={text1}
          onChange={handleText1Change}
          style={{ flex: 1 }}
        />
        <input
          type="text"
          value={text2}
          onChange={handleText2Change}
          style={{ flex: 1 }}
        />
      </div>
      <StyledButton onClick={handleSubmit}>Grade</StyledButton>
    </styledContainer>
  );
}
