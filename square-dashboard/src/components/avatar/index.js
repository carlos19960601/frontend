import { Wrapper } from "./style";

function Avatar(props) {
  let { avatar, ...restProps } = props;
  return <Wrapper {...restProps} src={avatar} />;
}
export default Avatar;
