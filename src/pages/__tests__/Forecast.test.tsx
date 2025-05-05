import { render, screen } from "@testing-library/react";
import Forecast from "../Forecast";
import { mockForecast } from "../../utilities/mocks/mockForecast";
import { BrowserRouter } from "react-router-dom";

describe("Forecast", () => {
  it("renders each day correctly", () => {
    render(
      <BrowserRouter>
        <Forecast forecast={mockForecast} />
      </BrowserRouter>
    );
    const adventurousDay = screen.getByTestId("Adventurous-day");
    const chillDay = screen.getAllByTestId("Chill-day");
    const cozyDay = screen.getByTestId("Cozy-day");
    const energeticDay = screen.getByTestId("Energetic-day");
    const sleepyDay = screen.getByTestId("Sleepy-day");
    const productiveDay = screen.getByTestId("Productive-day");

    expect(adventurousDay).toBeInTheDocument();
    expect(chillDay).toHaveLength(2);
    expect(cozyDay).toBeInTheDocument();
    expect(energeticDay).toBeInTheDocument();
    expect(sleepyDay).toBeInTheDocument();
    expect(productiveDay).toBeInTheDocument();
  });
});
