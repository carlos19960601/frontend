import HeaderItems from "./items";
import { Main, Wrapper } from "./style";

function Header() {
  return (
    <Wrapper>
      <Main>
        <HeaderItems />
      </Main>
    </Wrapper>
  );
}

export default Header;
