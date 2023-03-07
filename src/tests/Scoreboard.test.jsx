import { render, screen } from "@testing-library/react";
import Scoreboard from "../components/Scoreboard";

test("initial render", () => {
  const rendered = render(<Scoreboard timeRemaining={1} />);
  expect(rendered).toMatchSnapshot();
});

it("shows properly formatted minutes and seconds", () => {
  render(<Scoreboard timeRemaining={899} />);

  const timeP = screen.getByTestId("time");

  expect(timeP).toHaveTextContent("14:59");
});
