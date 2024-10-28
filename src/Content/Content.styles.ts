import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: auto;
`;

const QuestionWrapper = styled.div<{ $isVisible: boolean }>`
  display: none;
  ${(props) =>
    props.$isVisible &&
    `
    display: flex;
    flex-direction: column;
    `};
`;

const Title = styled.h1`
  font-size: 2rem;
  @media (min-width: 480px) {
    font-size: 4rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  @media (min-width: 480px) {
    font-size: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 2rem;
`;

const Button = styled.button`
  font-size: 1rem;
  min-width: 3rem;
  border-radius: 12px;
  @media (min-width: 480px) {
    font-size: 3rem;
    min-width: 6rem;
  }

  background-color: rgb(0, 63, 130);
  color: white;
  &:hover {
    cursor: pointer;
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 0 5px #24cb34;
  }
`;

const ThankYouWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default {
  ContentWrapper,
  QuestionWrapper,
  Title,
  SubTitle,
  ButtonWrapper,
  Button,
  ThankYouWrapper,
};
