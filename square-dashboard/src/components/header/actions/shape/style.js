import styled from "styled-components/macro";

const variables = {
  size: 12,
};

export const Notification = styled.div`
  background-color: #fc5a5a;
  width: ${variables.size}px;
  height: ${variables.size}px;
  border-radius: ${variables.size}px;
  position: absolute;
  right: -4px;
  top: -6px;
  opacity: 1;
  transition: opacity 0.4s;
`;

export const ShapeInfo = styled.div`
  z-index: 1;
  width: 200px;
  display: none;
  flex-direction: column;
  position: absolute;
  top: 35px;
  right: -50px;
  background: #ffffff;
  border: 1px solid #f1f1f5;
  box-shadow: 0 5px 15px rgba(68, 68, 79, 0.1);
  border-radius: 8px;
  color: #696974;
  font-size: 12px;
  padding: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  :hover ${Notification} {
    opacity: 0;
    transition: opacity 0.4s;
  }

  :hover ${ShapeInfo} {
    display: flex;
  }
`;

export const Text = styled.span`
  font-style: italic;
  margin: 10px 0 0 0;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  width: 25px;
  align-items: center;
  span {
    margin: 0 0 0 10px;
  }
`;
