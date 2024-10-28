import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  padding: 1rem;
  background-color: rgb(0, 63, 130);
  color: white;
  justify-content: center;
  @media (min-width: 480px) {
    padding: 1rem 1rem 1rem 3rem;
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  height: 50px;
`;
export default { HeaderWrapper, Logo };
