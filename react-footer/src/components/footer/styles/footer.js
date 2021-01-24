import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(
    circle,
    rgba(92, 39, 251, 1) 0%,
    rgba(112, 71, 247, 1) 100%
  );
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  text-align: left;
`;

export const Title = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  color: #fff;
  font-weight: bold;
`;

export const Link = styled.a`
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  text-decoration: none;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;
