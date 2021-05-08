import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  box-shadow: 3px 3px 3px 3px rgb(116, 114, 115);
  border: 0px solid rgb(214, 115, 166);
  border-style: groove;
  border-radius: 15px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  font-weight: bold;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.img`
  border-radius: 50%;
`;
