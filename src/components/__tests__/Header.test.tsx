import { render, screen } from "@testing-library/react";
import Header from "../Header.tsx";

describe("Header", () => {
  it("renders the app title", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    const headerText = screen.getByText("WeatherMood");
    expect(header).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
  });
});
