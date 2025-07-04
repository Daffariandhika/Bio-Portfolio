import styled from "@emotion/styled";
import Quote from "../About/Quote";

const FooterSection = styled.footer`
  width: 100%;
  padding: 2rem 1rem;
  color: #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterSection>
      <Quote/>
      © {new Date().getFullYear()} Daffa Riandhika.
    </FooterSection>
  );
}

export default Footer;
