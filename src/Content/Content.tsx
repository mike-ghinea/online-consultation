import s from "./Content.styles";
import Question from "./Question";
import { useContent } from "./useContent";

const Content: React.FC = () => {
  const {
    questions,
    visibleQuestion,
    incrementVisibleQuestion,
    updateAnswers,
  } = useContent();

  const questionList = questions.map((question, index) => (
    <Question
      key={question.key}
      question={question}
      isVisible={visibleQuestion === index}
      incrementVisibleQuestion={incrementVisibleQuestion}
      updateAnswers={updateAnswers}
    />
  ));

  return (
    <s.ContentWrapper role="main">
      {visibleQuestion > 4 ? (
        <s.ThankYouWrapper>
          <s.Title>Thank you!</s.Title>
          <s.SubTitle>
            One of our pharmacists will get in touch with you soon.
          </s.SubTitle>
        </s.ThankYouWrapper>
      ) : (
        <>{questionList}</>
      )}
    </s.ContentWrapper>
  );
};
export default Content;
