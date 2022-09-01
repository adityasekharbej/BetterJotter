import React from "react";
import styled from 'styled-components'


const Wrapper  = styled.div`

    display: flex;
    justify-content: center;
    gap: 20px;
`

export const Navbar = () => {
  return (
    <Wrapper>
      <p>Navbar </p>
      <p>Sign In</p>
    </Wrapper>
  );
};
