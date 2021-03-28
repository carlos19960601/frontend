import styled from "styled-components/macro";

const variables = {
  color: "#0062ff",
  crossSize: 7,
};

export const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const TextButton = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 12px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${variables.color};
  border: none;
  background-color: white;
  :focus {
    outline: none;
  }
`;

export const Cross = styled.div`
  width: ${variables.crossSize}px;
  height: ${variables.crossSize}px;
  :before,
  :after {
    position: absolute;
    left: 2px;
    content: "";
    height: ${variables.crossSize}px;
    width: 1px;
    background-color: ${variables.color};
  }
  :before {
    transform: rotate(90deg);
  }
  :after {
    transform: rotate(180deg);
  }
`;
