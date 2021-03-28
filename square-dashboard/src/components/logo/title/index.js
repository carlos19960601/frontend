import { Wrapper } from "./style";

function Title(props) {
  let { text, ...restProps } = props;
  return <Wrapper {...restProps}>{text}</Wrapper>;
}

export default Title;
