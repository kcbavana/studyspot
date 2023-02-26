import React, { useState } from 'react';
import styled from "styled-components"

const StyledContainer = styled.div`
    min-height: 200px;
    width: 500px;
`


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



export default function Submission() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const handleText1Change = (event) => {
    setText1(event.target.value);
  };

  const handleText2Change = (event) => {
    setText2(event.target.value);
  };

  const handleSubmit = async () => {
    // Handle submission logic here
    console.log('Text 1:', text1);
    console.log('Text 2:', text2);
    try {
      const response = await fetch('/api/getResults', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({assignment: text1, rubric: text2})
      });
      const data = await response.json(); // Wait for JSON data to be parsed
      console.log(data['choices'][0]['text']);
      setText3(data['choices'][0]['text']);
    } catch (error) {
      // Handle error here
      setText3(error);
    }
  };

  return (
    <StyledContainer>
      <div style={{ display: 'flex', height: "400px"}}>
        <input type="text" value={text1} onChange={handleText1Change} style={{ flex: 1 }} />
        <input type="text" value={text2} onChange={handleText2Change} style={{ flex: 1 }} />
      </div>
      <StyledButton onClick={handleSubmit}>Grade</StyledButton>
      <div>{text3}</div>
    </StyledContainer>
  );
}
