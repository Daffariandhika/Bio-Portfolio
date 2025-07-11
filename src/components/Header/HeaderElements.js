import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  font-family: "Orbitron", sans-serif;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  font-size: 1.2rem;
  font-weight: 800;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #a5b4fc;
  }
  @media screen and (max-width: 992px) {
    font-size: 0.85rem;
    font-weight: 800;
  }
`;

export const Logo = styled('div')`
  img {
    width: 47px;
    height: 47px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
