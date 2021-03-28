import styled from "styled-components/macro";

export const Wrapper = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size}px;
`;
