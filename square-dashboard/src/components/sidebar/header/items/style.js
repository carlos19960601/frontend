import styled from "styled-components/macro";

const variables = {
  color: "#92929d",
};

const Arrow = styled.div`
  border: solid ${variables.color};
  border-width: 0 2px 2px 0;
  display: flex;
  padding: 3px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
`;

export const ArrowUp = styled(Arrow)`
  transform: rotate(135deg);
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TeamsTitle = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  color: ${variables.color};
  letter-spacing: 1px;
`;
