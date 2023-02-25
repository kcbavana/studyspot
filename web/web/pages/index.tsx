import React, {useEffect, useState} from "react";
import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  background: #e396de;
`

export default function home(){
  const [contents, setContents] = useState("");
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  useEffect(()=>{
    setContents("Hello World")
  }, [contents])

  return(
    <Container>
      {contents + ": " + counter}
      <button onClick={increaseCounter}>increase</button>
    </Container>
  )
}