import { Link } from "react-router-dom";
import Logo from "../logo";
import Actions from "./actions";
import { ActionWrapper, LogoWrapper, Wrapper } from "./style";

const logoProps = {
  title: {
    size: 20,
    text: "Square",
    color: "#44444F",
  },
  image: {
    size: 34,
    color: "#0062ff",
  },
};

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <Logo {...logoProps} />
        </Link>
      </LogoWrapper>
      <ActionWrapper>
        <Actions />
      </ActionWrapper>
    </Wrapper>
  );
}

export default Header;
