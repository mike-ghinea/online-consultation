import Header from "../Header";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("should render correctly", () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toMatchSnapshot();
  });
});
