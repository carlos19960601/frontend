import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 86px;
  height: 38px;
`;

export const Input = styled.input`
  width: 86px;
  height: 38px;
  background: #f1f1f5;
  border-radius: 10px;
  border: 1px dashed #0062ff;
  transition: width 0.3;

  :focus {
    width: 120px;
    outline: none;
    padding: 0 10px;
  }
`;
