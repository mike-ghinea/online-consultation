import Footer from "../Footer";
import { render } from "@testing-library/react";

describe("Footer", () => {
  it("should render correctly", () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toMatchSnapshot();
  });
});
