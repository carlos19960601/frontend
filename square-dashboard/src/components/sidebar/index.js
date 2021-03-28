import Header from "./header";
import Menu from "./menu";
import { Wrapper } from "./style";

function Sidebar() {
  return (
    <Wrapper>
      <Header />
      <Menu />
    </Wrapper>
  );
}

export default Sidebar;
