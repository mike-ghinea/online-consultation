import s from "./Content.styles";

const Question: React.FC<{
  question: { text: string; key: string };
  isVisible: boolean;
  incrementVisibleQuestion: () => void;
  updateAnswers: (key: string, value: boolean) => void;
}> = ({ question, isVisible, incrementVisibleQuestion, updateAnswers }) => {
  return (
    <s.QuestionWrapper $isVisible={isVisible}>
      <s.Title>{question.text}</s.Title>
      <s.ButtonWrapper onClick={incrementVisibleQuestion}>
        <s.Button
          onClick={() => updateAnswers(question.key, true)}
          data-testid={`t_${question.key}_yes`}
        >
          Yes
        </s.Button>
        <s.Button
          onClick={() => updateAnswers(question.key, false)}
          data-testid={`t_${question.key}_no`}
        >
          No
        </s.Button>
      </s.ButtonWrapper>
    </s.QuestionWrapper>
  );
};

export default Question;
