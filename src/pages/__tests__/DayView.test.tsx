import { render, screen } from "@testing-library/react";
import DayViewPage from "../DayView";
import { mockForecast } from "../../utilities/mocks/mockForecast";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";

describe("DayViewPage", () => {
  it("renders day view card correctly when data present", () => {
    vi.mock("react-router-dom", async () => {
      const actual = await vi.importActual("react-router-dom");
      return {
        ...actual,
        useParams: vi.fn().mockReturnValue({ date: "2023-10-02" }),
      };
    });

    render(
      <BrowserRouter>
        <DayViewPage forecast={mockForecast} />
      </BrowserRouter>
    );

    const dayView = screen.getByTestId("day-view-2023-10-02");
    expect(dayView).toBeInTheDocument();
  });
  it("renders day view correctly when no data present", () => {
    vi.mock("react-router-dom", async () => {
      const actual = await vi.importActual("react-router-dom");
      return {
        ...actual,
        useParams: vi.fn().mockReturnValue({ date: "2023-10-02" }),
      };
    });

    render(
      <BrowserRouter>
        <DayViewPage forecast={[]} />
      </BrowserRouter>
    );

    const noData = screen.getByTestId("no-data");
    expect(noData).toBeInTheDocument();
  });
});
