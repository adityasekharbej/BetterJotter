import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 800px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const P = styled.div`
font-size: 20px;
font-weight: bold;
cursor: pointer;

:hover{
    color: purple;
font-size: 22px;

}
`
export const Welcome = () => {
    const navigate = useNavigate();
  return (
    <Wrapper>
      <img
        src="https://acegif.com/wp-content/uploads/2021/4fh5wi/welcome-18.gif"
        alt=""
      />
      <P onClick={()=>navigate('/create')}>Get Started ✍️</P>
    </Wrapper>
  );
};
