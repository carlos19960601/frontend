import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

const variables = {
  blueColor: "#0062ff",
  grayColor: "#92929d",
};

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const Icon = styled.div`
  margin: 0 24px;
`;

const active = "nav-item-active";

export const NavItem = styled(NavLink).attrs({
  active,
})`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #171725;
  font-size: 14px;
  letter-spacing: 0.1px;
  border-left: 3px solid #fff;
  svg {
    fill: ${variables.grayColor};
  }
  &.${active} {
    color: ${variables.blueColor};
    border-left: 3px solid ${variables.blueColor};
    svg {
      fill: ${variables.blueColor};
    }
  }
`;

export const NameLink = styled.span``;
