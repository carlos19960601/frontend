import Avatar from "../../../avatar";
import { TeamAvatar, TeamName, Users, Wrapper } from "./style";

const usersData = [
  {
    size: 26,
    name: "KA",
    color: "#FFC542",
    avatar: "/images/james.png",
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
    avatar: "/images/james.png",
  },
  {
    size: 26,
    name: "GU",
    color: "#FF9AD5",
    avatar: "/images/james.png",
  },
  {
    size: 26,
    name: "ZT",
    color: "#82C43C",
    avatar: "/images/james.png",
  },
  {
    size: 26,
    name: "MI",
    color: "#50B5FF",
    avatar: "/images/james.png",
  },
];

function Teams() {
  return (
    <>
      <Wrapper>
        <TeamAvatar src="/images/team1.png"/>
        <TeamName>Iconspace Team</TeamName>
      </Wrapper>
      <Users>
        {usersData.map((user, idx) => (
          <Avatar key={idx} {...user} />
        ))}
      </Users>
    </>
  );
}

export default Teams;
