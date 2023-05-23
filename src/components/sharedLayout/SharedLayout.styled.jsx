import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: relative;
  padding: 0;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 250px;

  gap: 30px;
  background-color: #fff;
  box-shadow: 0px 6px 8px -6px rgba(0, 0, 0, 0.75);
  background: linear-gradient(
    112.58deg,
    #fffec8 18.15%,
    rgba(255, 255, 255, 0) 63.07%
  );
`;

const Logo = styled(NavLink)`
  margin-right: 80px;
  padding: 20px 0;
  font-size: 24px;
  line-height: 0.83;

  font-style: italic;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: #01996d;
`;

const NavItem = styled(NavLink)`
  padding: 24px 0;

  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 0.83;
  text-decoration: none;
  color: #292929;

  &.active {
    color: #d47901;
    text-decoration: underline;
    font-size: 24px;
  }

  :not(:last-child) {
    margin-right: 50px;
  }

  :hover {
    text-decoration: underline;
  }
`;

export { Container, Logo, Navigation, NavItem };
