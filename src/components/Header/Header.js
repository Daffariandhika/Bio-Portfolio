import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn
} from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div
      className="Container"
      style={{ padding: 0 }}
    >
      <Nav>
        <Logo to="/">
          <img
            src="https://visitor-badge.laobi.icu/badge?page_id=bio-portfolio-five.vercel.app&left_color=%231e1b4b&right_color=%239333ea&left_text=VISITORS"
            style={{ width: "78px", height: "78px", objectFit: "contain"}}
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink
            className="menu-item"
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className="menu-item"
            to="tech"
          >
            Tech
          </NavLink>
          <NavLink
            className="menu-item"
            to="projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="menu-item"
            to="certificate"
          >
            Certificate
          </NavLink>
          <NavLink
            className="menu-item"
            to="contact"
          >
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="PrimaryBtn"
            href="https://www.linkedin.com/in/daffariandhika/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
