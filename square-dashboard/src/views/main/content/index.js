import { Wrapper } from "./style";
import ContentTasks from "./tasks";
import ContentTeams from "./teams";
import ContentTitle from "./title";

function Content() {
  return (
    <Wrapper>
      <ContentTitle />
      <ContentTeams />
      <ContentTasks />
    </Wrapper>
  );
}

export default Content;
