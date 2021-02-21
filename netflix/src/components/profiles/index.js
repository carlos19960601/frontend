import { Container, List, Name, Picture, Title, User } from "./styles/profiles";

function Profiles(props) {
  let { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle(props) {
  let { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList(props) {
  let { children, ...restProps } = props;
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser(props) {
  let { children, ...restProps } = props;
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture(props) {
  let { src, ...restProps } = props;
  return (
    <Picture
      src={src ? "/images/users/${src}.png" : "/images/misc/loading"}
      {...restProps}
    />
  );
};

Profiles.Name = function ProfilesName(props) {
  let { children, ...restProps } = props;
  return <Name {...restProps}>{children}</Name>;
};

export default Profiles;
