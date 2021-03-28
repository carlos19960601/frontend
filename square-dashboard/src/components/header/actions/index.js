import Avatar from "../../avatar";
import ActionButton from "./button";
import ActionSearch from "./search";
import ActionShape from "./shape";
import { Wrapper } from "./style";

const userProps = {
  size: 32,
  name: "KA",
  color: "",
  avatar: "/images/james.png",
};

function Actions() {
  return (
    <Wrapper>
      <ActionSearch />
      <ActionButton />
      <ActionShape />
      <Avatar {...userProps} />
    </Wrapper>
  );
}

export default Actions;
