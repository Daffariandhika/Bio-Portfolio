import styled from "@emotion/styled";

const FooterSection = styled.footer`
  width: 100%;
  padding: 2rem 1rem;
  color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterSection>
      © {new Date().getFullYear()} Daffa Riandhika.
    </FooterSection>
  );
}

export default Footer;
