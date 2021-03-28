import styled from "styled-components/macro";

export const Wrapper = styled.span`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: 900;
  margin-left: 0.5rem;
`;
