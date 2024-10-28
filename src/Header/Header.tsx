import s from "./Header.styles";
import meLogo from "../assets/me_logo.png";
const Header: React.FC = () => {
  return (
    <s.HeaderWrapper>
      <s.Logo src={meLogo} alt="MedExpress logo" />
    </s.HeaderWrapper>
  );
};

export default Header;
