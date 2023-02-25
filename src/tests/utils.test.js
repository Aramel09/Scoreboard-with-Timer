import { formatMinutesAndSeconds } from "../utils";

test("formatMinutesAndSeconds", () => {
  expect(formatMinutesAndSeconds(0)).toBe("0:00");
  expect(formatMinutesAndSeconds(0)).toBe("0:01");
  expect(formatMinutesAndSeconds(0)).toBe("1:00");
  expect(formatMinutesAndSeconds(0)).toBe("1:01");
  expect(formatMinutesAndSeconds(0)).toBe("59:59");
  expect(formatMinutesAndSeconds(0)).toBe("60:00");
  expect(formatMinutesAndSeconds(0)).toBe("60:01");
});
