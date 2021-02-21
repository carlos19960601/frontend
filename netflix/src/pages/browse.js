import { useContent } from "../hooks";

function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  return <p>Hello from the browse!</p>;
}

export default Browse;
