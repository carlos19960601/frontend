import { Icon, NameLink, NavItem, Wrapper } from "./style";

const active = "nav-item-active";

export function Item(props) {
  const { icon, name, link } = props;
  return (
    <Wrapper>
      <NavItem exact activeClassName={active} to={link}>
        <Icon>{icon}</Icon>
        <NameLink>{name}</NameLink>
      </NavItem>
    </Wrapper>
  );
}

export default Item;
