import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #8ECAE6;
  .imgContainer {
    max-width: 200px;

  }


`;

const Logo = styled.div`
  
`;

const Navbar = () => {
  return (
    <NavContainer>
        <div className='imgContainer'>
            
        </div>
    </NavContainer>
  );
};

export default Navbar;
