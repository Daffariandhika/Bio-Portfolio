import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";

const SiderBar = styled.div`
  font-family: "Orbitron", sans-serif;
  letter-spacing: 1px;
  background-color: rgba(0, 0, 0, 0.06);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  -webkit-box-shadow: 0 25px 23px rgba(0, 0, 0, 0.15);
  box-shadow: 0 25px 23px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  position: fixed;
  height: 100%;
  width: 100%;
  /* top: 0; */
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    color: #a5b4fc;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;

function Dropdown({ isOpen, toggle }) {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="about"
        >
          About
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="tech"
        >
          Tech
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="certificate"
        >
          Certificate
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="contact"
        >
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn onClick={toggle}>
        <a
          className="btn PrimaryBtn"
          href="https://www.linkedin.com/in/daffariandhika/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown;
