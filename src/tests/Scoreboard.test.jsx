import { render } from "@testing-library/react";
import Scoreboard from "../components/Scoreboard";

test("renders scoreboard", () => {
  const rendered = render(<Scoreboard />);
  expect(rendered).toMatchSnapshot();
});
