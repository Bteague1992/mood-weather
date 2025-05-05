import { render, screen } from "@testing-library/react";
import { mockForecast } from "../../utilities/mocks/mockForecast";
import ForecastCard from "../ForecastCard";
import { BrowserRouter } from "react-router-dom";

describe("ForecastCard", () => {
  it("should render energetic day correctly", () => {
    render(
      <BrowserRouter>
        <ForecastCard day={mockForecast[0]} />
      </BrowserRouter>
    );
    const forecastCard = screen.getByTestId("Energetic-day");
    expect(forecastCard).toBeInTheDocument();
  });
  it("should render cozy day correctly", () => {
    render(
      <BrowserRouter>
        <ForecastCard day={mockForecast[1]} />
      </BrowserRouter>
    );
    const forecastCard = screen.getByTestId("Cozy-day");
    expect(forecastCard).toBeInTheDocument();
  });
  it("should render Sleepy day correctly", () => {
    render(
      <BrowserRouter>
        <ForecastCard day={mockForecast[2]} />
      </BrowserRouter>
    );
    const forecastCard = screen.getByTestId("Sleepy-day");
    expect(forecastCard).toBeInTheDocument();
  });
  it("should render chill day correctly", () => {
    render(
      <BrowserRouter>
        <ForecastCard day={mockForecast[3]} />
      </BrowserRouter>
    );
    const forecastCard = screen.getByTestId("Chill-day");
    expect(forecastCard).toBeInTheDocument();
  });
  it("should render adventurous day correctly", () => {
    render(
      <BrowserRouter>
        <ForecastCard day={mockForecast[4]} />
      </BrowserRouter>
    );
    const forecastCard = screen.getByTestId("Adventurous-day");
    expect(forecastCard).toBeInTheDocument();
  });
  it("should render productive day correctly", () => {
    render(
      <BrowserRouter>
        <ForecastCard day={mockForecast[5]} />
      </BrowserRouter>
    );
    const forecastCard = screen.getByTestId("Productive-day");
    expect(forecastCard).toBeInTheDocument();
  });
});
