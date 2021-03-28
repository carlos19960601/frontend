import styled from "styled-components/macro";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  max-width: 1600px;
  margin: 0, auto;
  box-shadow: inset 0px -1px 0px #e2e2ea;
`;

export const LogoWrapper = styled.div`
  margin-left: 25px;
  a {
    text-decoration: none;
  }
`;

export const ActionWrapper = styled.div`
  margin-right: 25px;
`;
