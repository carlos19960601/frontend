import { useState } from "react";
import HeaderButton from "../button";
import HeaderTeams from "../teams";
import { ArrowDown, ArrowUp, Block, TeamsTitle, Wrapper } from "./style";

function Items() {
  const [opened, setOpened] = useState(true);

  return (
    <Wrapper>
      <Block>
        <TeamsTitle>Teams</TeamsTitle>
        <div>{opened ? <ArrowDown /> : <ArrowUp />}</div>
      </Block>
      {opened && <HeaderTeams />}
      <HeaderButton />
    </Wrapper>
  );
}

export default Items;
