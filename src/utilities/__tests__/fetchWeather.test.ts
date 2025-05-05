import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import { fetchWeather } from "../fetchWeather";
import { mockWeatherResponse } from "../mocks/mockWeatherResponse";

vi.mock("axios");
const mockedAxios = axios as unknown as { get: ReturnType<typeof vi.fn> };

describe("fetchWeather", () => {
  it("returns array of forecast days that match format", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockWeatherResponse });
    const result = await fetchWeather(35, -81);

    expect(result).toHaveLength(7);
    result.forEach((day) => {
      expect(day).toMatchObject({
        mood: expect.any(String),
        emoji: expect.any(String),
        outfit: expect.any(String),
        activity: expect.any(String),
        day: expect.any(String),
        date: expect.any(String),
        tempHigh: expect.any(Number),
        tempLow: expect.any(Number),
        uvIndex: expect.any(Number),
        rainChance: expect.any(Number),
        feelsLike: expect.any(Number),
        windSpeed: expect.any(Number),
        cloudCover: expect.any(Number),
      });
    });
  });

  it("returns empty array if the API fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("API is down"));

    const result = await fetchWeather(0, 0);
    expect(result).toEqual([]);
  });
});
