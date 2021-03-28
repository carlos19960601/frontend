import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Content from "./content";
import { Wrapper } from "./style";
function Main() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Content />
      </Wrapper>
    </>
  );
}

export default Main;
