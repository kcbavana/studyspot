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

  color: white;

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
      <div>
        Virtual study spaces have become increasingly popular in recent years, and for good reason. There are numerous advantages to virtual study spaces that make them a superior option compared to traditional physical study spaces.
        First and foremost, virtual study spaces offer convenience and accessibility. With virtual study spaces, students can access their study environment from anywhere with an internet connection. This means that students can study from the comfort of their own home, a coffee shop, or even while traveling. This flexibility is particularly beneficial for students who may have other commitments, such as work or family responsibilities, that make it difficult to attend physical study spaces during set hours.

        Virtual study spaces also offer a greater degree of control over the study environment. In traditional physical study spaces, students may be distracted by noise, uncomfortable temperatures, or other environmental factors that they have no control over. With virtual study spaces, students can customize their environment to suit their individual needs. They can adjust the lighting, temperature, and noise level to create an optimal study environment that maximizes their focus and productivity.

        Another benefit of virtual study spaces is the ability to collaborate with peers more easily. With virtual study spaces, students can connect with each other from anywhere in the world. This makes it easier for students to form study groups and work together on projects, even if they are not physically in the same location. Additionally, virtual study spaces often offer collaborative tools, such as video conferencing and screen sharing, which make it easier for students to work together effectively.

        Virtual study spaces also offer a greater degree of flexibility when it comes to scheduling. Traditional physical study spaces often have set hours, which may not be convenient for all students. With virtual study spaces, students can access the study environment at any time, day or night. This makes it easier for students to fit studying into their schedule, no matter how busy they may be.

        Finally, virtual study spaces can be more cost-effective than traditional physical study spaces. Many virtual study spaces are free or low-cost, which can be a significant advantage for students who may not have the resources to pay for a traditional study space. Additionally, virtual study spaces do not require any travel or commuting, which can save students both time and money.

      </div>
      <br></br>
      <form>
        <label>
          <input type="text" name="name" />
        </label>
          <input type="submit" value="Get Early Access Here" />  
      </form>
      <br></br>
      
    </Container>
  );
}
