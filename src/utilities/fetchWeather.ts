import axios from "axios";
import { getMood } from "./getMood";
import { ApiParams, ForecastDay, OpenMeteoResponse } from "../types/data";

export async function fetchWeather(
  lat: number,
  lon: number
): Promise<ForecastDay[]> {
  const url = "https://api.open-meteo.com/v1/forecast";

  const params: ApiParams = {
    latitude: lat,
    longitude: lon,
    hourly:
      "apparent_temperature,cloudcover,windspeed_10m,precipitation_probability",
    daily:
      "temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_mean",
    temperature_unit: "fahrenheit",
    windspeed_unit: "mph",
    timezone: "auto",
  };

  try {
    const { data } = await axios.get<OpenMeteoResponse>(url, { params });
    const { daily, hourly } = data;

    // Grab indices for 12PM readings (rough daily midpoint)
    const noonIndices = hourly.time
      .map((t, i) => {
        const d = new Date(t);
        return d.getHours() === 12 ? i : -1;
      })
      .filter((i) => i !== -1);

    const forecast: ForecastDay[] = daily.time.slice(0, 7).map((t, i) => {
      const d = new Date(t);

      const high = Math.floor(daily.temperature_2m_max[i]);
      const low = Math.floor(daily.temperature_2m_min[i]);
      const uv = Math.floor(daily.uv_index_max[i]);
      const rain = Math.floor(daily.precipitation_probability_mean[i]);
      const feels = Math.floor(hourly.apparent_temperature[noonIndices[i]]);
      const wind = Math.floor(hourly.windspeed_10m[noonIndices[i]]);
      const cloud = Math.floor(hourly.cloudcover[noonIndices[i]]);

      const mood = getMood(high, low, uv, rain, cloud, wind);

      return {
        day: d.toLocaleDateString("en-US", { weekday: "long" }).slice(0, 3),
        date: t,
        tempHigh: high,
        tempLow: low,
        uvIndex: uv,
        rainChance: rain,
        feelsLike: feels,
        windSpeed: wind,
        cloudCover: cloud,
        ...mood,
      };
    });

    return forecast;
  } catch (err) {
    console.error("Weather fetch failed:", err);
    return [];
  }
}
