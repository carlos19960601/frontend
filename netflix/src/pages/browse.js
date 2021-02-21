import { useContent } from "../hooks";
import {selectionFilter} from "../utils";

function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  return <BrowseConatiner slide={slides} />;
}

export default Browse;
