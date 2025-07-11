import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";

const StyledLinkedinIcon = styled(FaLinkedin)`
  transition: color 0.3s;
  &:hover {
    color: #0a66c2;
  }
`;

const StyledGithubIcon = styled(FaGithub)`
  transition: color 0.3s;
  &:hover {
    color: #000000;
  }
`;

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2.3rem;
    color: #a5b4fc;
  }

  @media screen and (max-width: 1080px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

function FixSocialIcon() {
  return (
    <SocialContainer>
        <ul>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/daffariandhika"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledLinkedinIcon />
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/daffariandhika"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledGithubIcon />
            </a>
          </li>
        </ul>
    </SocialContainer>
  );
}

export default FixSocialIcon;
