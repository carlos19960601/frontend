import styled from "styled-components/macro";

const usersData = [
  {
    size: 26,
    name: "KA",
    color: "#FFC542",
    avatar: "",
  },
  {
    size: 26,
    name: "TE",
    color: "",
    avatar: "/images/james.png",
  },
  {
    size: 26,
    name: "AS",
    color: "#A461D8",
    avatar: "",
  },
  {
    size: 26,
    name: "GU",
    color: "#FF9AD5",
    avatar: "",
  },
  {
    size: 26,
    name: "ZT",
    color: "#82C43C",
    avatar: "",
  },
  {
    size: 26,
    name: "MI",
    color: "#50B5FF",
    avatar: "",
  },
];

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 20px 0;
`;

export const TeamAvatar = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

export const TeamName = styled.span`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #171725;
`;

export const Users = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;
