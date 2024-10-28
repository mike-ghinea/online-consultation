import s from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <s.FooterWrapper>
      <s.Section>
        <s.SectionHeader>Useful links</s.SectionHeader>
        <s.SectionEntries>
          <s.Link href="#">Our treatments</s.Link>
          <s.Link href="#">Our team</s.Link>
          <s.Link href="#">Delivery Guarantee</s.Link>
          <s.Link href="#">Customer Testimonials</s.Link>
          <s.Link href="#">FAQ</s.Link>
          <s.Link href="#">Coming soon</s.Link>
        </s.SectionEntries>
      </s.Section>
      <s.Section>
        <s.SectionHeader>Contact Us</s.SectionHeader>
        <s.SectionEntries>
          <p>Mobile: 07000 000 000</p>
          <p>Landline: 0200 000 0000</p>
          <p>-----------------------</p>
          <p>info@example.com</p>
        </s.SectionEntries>
      </s.Section>
    </s.FooterWrapper>
  );
};

export default Footer;
