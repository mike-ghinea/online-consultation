import Content from "../Content";
import { fireEvent, render } from "@testing-library/react";
import Question from "../Question";

describe("Content", () => {
  it("should render correctly", () => {
    const { baseElement } = render(<Content />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should show the thank you page", () => {
    const { getByTestId, getByText } = render(<Content />);
    fireEvent.click(getByTestId("t_valid_age_yes"));
    fireEvent.click(getByTestId("t_likes_fruit_yes"));
    fireEvent.click(getByTestId("t_previous_allergy_yes"));
    fireEvent.click(getByTestId("t_allergy_medication_yes"));
    fireEvent.click(getByTestId("t_other_medication_yes"));
    expect(getByText("Thank you!")).toBeTruthy();
  });
});

describe("Question", () => {
  it("should call the answer updater correctly", () => {
    const updateAnswersSpy = jest.fn();
    const { getByTestId } = render(
      <Question
        question={{
          text: "test",
          key: "key",
        }}
        isVisible={false}
        incrementVisibleQuestion={jest.fn()}
        updateAnswers={updateAnswersSpy}
      />,
    );

    fireEvent.click(getByTestId("t_key_yes"));

    expect(updateAnswersSpy).toHaveBeenCalledWith("key", true);

    fireEvent.click(getByTestId("t_key_no"));

    expect(updateAnswersSpy).toHaveBeenCalledWith("key", false);
  });
});
