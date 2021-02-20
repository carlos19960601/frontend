import { Link as ReactRouterLink } from "react-router-dom";
import { Background, ButtonLink, Container, Logo } from "./styles/header";

function Header(props) {
  let { bg = true, children, ...restProps } = props;
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame(props) {
  let { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink(props) {
  let { children, ...restProps } = props;
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo(props) {
  let { to, ...restProps } = props;
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

export default Header;
