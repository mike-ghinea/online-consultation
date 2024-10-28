import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: auto;
  background-color: rgb(0, 63, 130);
  color: white;
  display: grid;
  line-height: 1.5;
  grid-template-columns: 1fr;
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const SectionHeader = styled.div`
  border-bottom: 1px solid #fff;
  font-size: 1.5rem;
`;

const SectionEntries = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    margin: 0;
  }
`;

const Link = styled.a`
  font-size: 1rem;
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default { FooterWrapper, Section, SectionHeader, SectionEntries, Link };
