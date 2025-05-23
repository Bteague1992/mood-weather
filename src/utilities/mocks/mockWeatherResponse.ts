import { OpenMeteoResponse } from "../../types/data";

export const mockWeatherResponse: OpenMeteoResponse = {
  latitude: 35.7195,
  longitude: -81.46049,
  generationtime_ms: 0.17321109771728516,
  utc_offset_seconds: -14400,
  timezone: "America/New_York",
  timezone_abbreviation: "GMT-4",
  hourly_units: {
    time: "iso8601",
    apparent_temperature: "°F",
    cloudcover: "%",
    windspeed_10m: "mp/h",
    precipitation_probability: "%",
  },
  hourly: {
    time: [
      "2025-05-04T00:00",
      "2025-05-04T01:00",
      "2025-05-04T02:00",
      "2025-05-04T03:00",
      "2025-05-04T04:00",
      "2025-05-04T05:00",
      "2025-05-04T06:00",
      "2025-05-04T07:00",
      "2025-05-04T08:00",
      "2025-05-04T09:00",
      "2025-05-04T10:00",
      "2025-05-04T11:00",
      "2025-05-04T12:00",
      "2025-05-04T13:00",
      "2025-05-04T14:00",
      "2025-05-04T15:00",
      "2025-05-04T16:00",
      "2025-05-04T17:00",
      "2025-05-04T18:00",
      "2025-05-04T19:00",
      "2025-05-04T20:00",
      "2025-05-04T21:00",
      "2025-05-04T22:00",
      "2025-05-04T23:00",
      "2025-05-05T00:00",
      "2025-05-05T01:00",
      "2025-05-05T02:00",
      "2025-05-05T03:00",
      "2025-05-05T04:00",
      "2025-05-05T05:00",
      "2025-05-05T06:00",
      "2025-05-05T07:00",
      "2025-05-05T08:00",
      "2025-05-05T09:00",
      "2025-05-05T10:00",
      "2025-05-05T11:00",
      "2025-05-05T12:00",
      "2025-05-05T13:00",
      "2025-05-05T14:00",
      "2025-05-05T15:00",
      "2025-05-05T16:00",
      "2025-05-05T17:00",
      "2025-05-05T18:00",
      "2025-05-05T19:00",
      "2025-05-05T20:00",
      "2025-05-05T21:00",
      "2025-05-05T22:00",
      "2025-05-05T23:00",
      "2025-05-06T00:00",
      "2025-05-06T01:00",
      "2025-05-06T02:00",
      "2025-05-06T03:00",
      "2025-05-06T04:00",
      "2025-05-06T05:00",
      "2025-05-06T06:00",
      "2025-05-06T07:00",
      "2025-05-06T08:00",
      "2025-05-06T09:00",
      "2025-05-06T10:00",
      "2025-05-06T11:00",
      "2025-05-06T12:00",
      "2025-05-06T13:00",
      "2025-05-06T14:00",
      "2025-05-06T15:00",
      "2025-05-06T16:00",
      "2025-05-06T17:00",
      "2025-05-06T18:00",
      "2025-05-06T19:00",
      "2025-05-06T20:00",
      "2025-05-06T21:00",
      "2025-05-06T22:00",
      "2025-05-06T23:00",
      "2025-05-07T00:00",
      "2025-05-07T01:00",
      "2025-05-07T02:00",
      "2025-05-07T03:00",
      "2025-05-07T04:00",
      "2025-05-07T05:00",
      "2025-05-07T06:00",
      "2025-05-07T07:00",
      "2025-05-07T08:00",
      "2025-05-07T09:00",
      "2025-05-07T10:00",
      "2025-05-07T11:00",
      "2025-05-07T12:00",
      "2025-05-07T13:00",
      "2025-05-07T14:00",
      "2025-05-07T15:00",
      "2025-05-07T16:00",
      "2025-05-07T17:00",
      "2025-05-07T18:00",
      "2025-05-07T19:00",
      "2025-05-07T20:00",
      "2025-05-07T21:00",
      "2025-05-07T22:00",
      "2025-05-07T23:00",
      "2025-05-08T00:00",
      "2025-05-08T01:00",
      "2025-05-08T02:00",
      "2025-05-08T03:00",
      "2025-05-08T04:00",
      "2025-05-08T05:00",
      "2025-05-08T06:00",
      "2025-05-08T07:00",
      "2025-05-08T08:00",
      "2025-05-08T09:00",
      "2025-05-08T10:00",
      "2025-05-08T11:00",
      "2025-05-08T12:00",
      "2025-05-08T13:00",
      "2025-05-08T14:00",
      "2025-05-08T15:00",
      "2025-05-08T16:00",
      "2025-05-08T17:00",
      "2025-05-08T18:00",
      "2025-05-08T19:00",
      "2025-05-08T20:00",
      "2025-05-08T21:00",
      "2025-05-08T22:00",
      "2025-05-08T23:00",
      "2025-05-09T00:00",
      "2025-05-09T01:00",
      "2025-05-09T02:00",
      "2025-05-09T03:00",
      "2025-05-09T04:00",
      "2025-05-09T05:00",
      "2025-05-09T06:00",
      "2025-05-09T07:00",
      "2025-05-09T08:00",
      "2025-05-09T09:00",
      "2025-05-09T10:00",
      "2025-05-09T11:00",
      "2025-05-09T12:00",
      "2025-05-09T13:00",
      "2025-05-09T14:00",
      "2025-05-09T15:00",
      "2025-05-09T16:00",
      "2025-05-09T17:00",
      "2025-05-09T18:00",
      "2025-05-09T19:00",
      "2025-05-09T20:00",
      "2025-05-09T21:00",
      "2025-05-09T22:00",
      "2025-05-09T23:00",
      "2025-05-10T00:00",
      "2025-05-10T01:00",
      "2025-05-10T02:00",
      "2025-05-10T03:00",
      "2025-05-10T04:00",
      "2025-05-10T05:00",
      "2025-05-10T06:00",
      "2025-05-10T07:00",
      "2025-05-10T08:00",
      "2025-05-10T09:00",
      "2025-05-10T10:00",
      "2025-05-10T11:00",
      "2025-05-10T12:00",
      "2025-05-10T13:00",
      "2025-05-10T14:00",
      "2025-05-10T15:00",
      "2025-05-10T16:00",
      "2025-05-10T17:00",
      "2025-05-10T18:00",
      "2025-05-10T19:00",
      "2025-05-10T20:00",
      "2025-05-10T21:00",
      "2025-05-10T22:00",
      "2025-05-10T23:00",
    ],
    apparent_temperature: [
      52, 54.6, 54.9, 54.3, 54.5, 53.5, 55.3, 53.8, 56.3, 57.6, 60.4, 61.7,
      67.8, 69.2, 70.3, 68.8, 68.3, 67.8, 64.9, 63.9, 60, 57.2, 55.6, 53.7,
      51.7, 51.2, 50.8, 49.8, 49.2, 47.3, 47, 46.9, 53, 56.6, 60.9, 57.6, 62,
      64.6, 64.9, 61.7, 64.9, 62.3, 61.1, 61.8, 56.9, 55.7, 55.8, 53.5, 51.4,
      49.6, 47.7, 46.6, 45.7, 45.3, 44.6, 44.8, 52.2, 55.6, 57.6, 62.2, 64.6,
      66.4, 67.9, 72.6, 72.6, 71.5, 69.2, 68.2, 59.9, 55.1, 52.6, 51, 49.6,
      48.2, 46.7, 45.8, 45.9, 46.4, 45.9, 46.7, 51.6, 57.2, 61.4, 65.4, 66,
      69.7, 69.6, 67.8, 68.6, 63.3, 59.9, 59.5, 57, 55.6, 52.5, 53.2, 51.8,
      50.4, 49.7, 50.1, 49.1, 48.2, 48.1, 49.3, 55.5, 61.6, 66.3, 71.9, 78.5,
      82.4, 79.7, 77.7, 78.6, 76.6, 72.6, 64.6, 63.9, 62.9, 62.5, 59.5, 57.3,
      55.5, 54.2, 52.8, 51.5, 50.3, 49.9, 50.7, 54.6, 57, 60.1, 60.7, 63.5,
      61.6, 60.8, 62.8, 65.5, 66.5, 65.1, 62.2, 59.4, 57, 55, 53.1, 53, 53.8,
      53.8, 51.7, 48.9, 46.7, 45.6, 45.1, 46, 49.1, 53.5, 58.5, 63.4, 67.3,
      69.3, 68.6, 66.1, 63.1, 60.9, 58.4, 56, 54.2, 52.3, 50.9,
    ],
    cloudcover: [
      100, 100, 99, 100, 98, 100, 100, 47, 6, 100, 46, 34, 34, 40, 25, 0, 9, 7,
      3, 8, 0, 0, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 7, 89, 100, 100, 26, 95, 82, 89,
      22, 22, 66, 7, 11, 7, 81, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 3, 20, 32, 42,
      42, 6, 6, 6, 5, 0, 0, 6, 69, 7, 12, 0, 5, 9, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      61, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 68, 100, 100, 100, 44, 100,
      100, 100, 100, 75, 100, 13, 69, 100, 100, 92, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 89, 78, 67, 70, 73, 76,
      84, 92, 100, 100, 100, 100, 95, 91, 86, 61, 36, 11, 37, 64, 90, 93, 97,
      100, 100, 100, 100,
    ],
    windspeed_10m: [
      16.3, 5.5, 3.7, 4.1, 2.2, 2, 1.3, 2.5, 0.6, 2.8, 3.4, 5, 1.8, 5.8, 7.1,
      10.1, 10.4, 9.6, 10.2, 9.8, 7.1, 6.1, 4.8, 5.4, 8.3, 7, 5, 5.1, 4.3, 5.8,
      3.7, 3.7, 1.7, 2.3, 2.7, 5.5, 6.7, 11.2, 13.2, 13.8, 12.8, 14.8, 12.7,
      10.3, 8.3, 4.8, 6.8, 4.9, 4.8, 4.7, 5, 5.1, 5.4, 5.1, 5.1, 5.1, 1.8, 3.3,
      5.8, 5.9, 7.8, 8.8, 8.3, 7.1, 6.6, 5.8, 5.7, 3.2, 2.4, 3.6, 2.8, 4.1, 4.3,
      4.8, 4.8, 4.3, 4, 3.4, 3.2, 2.6, 2.4, 1.3, 0.7, 1.4, 4.7, 7.7, 8.8, 8.8,
      8.5, 12, 10, 5.7, 3.7, 3.8, 4.2, 3.7, 4.1, 4, 3.8, 3.3, 3.2, 4.3, 3.8, 4,
      3.5, 3.5, 3.6, 3.4, 2, 0.8, 2.3, 3.6, 3.6, 3.2, 6.8, 8.1, 6.7, 4.9, 5.4,
      4.2, 2.2, 3.7, 2.7, 4.1, 4.1, 4, 4.1, 3.3, 4.8, 8.1, 8.6, 8.8, 6.9, 8.1,
      8.4, 6.7, 4.8, 4, 3.8, 4.1, 4.1, 3, 1.9, 2, 2.7, 3.4, 3.6, 3.4, 3, 3.3,
      3.6, 4, 4.7, 5.5, 6.9, 8, 8.1, 7.8, 7.7, 8, 8.7, 8.6, 7.4, 5.8, 4.5, 3.6,
      3.3, 3.3,
    ],
    precipitation_probability: [
      56, 81, 70, 66, 23, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 0,
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 3, 2, 3, 3, 2, 5, 1, 1, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
      0, 0, 1, 1, 1, 1, 1, 1, 10, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15,
      14, 14, 14, 14, 14, 14, 22, 22, 22, 22, 22, 22, 19, 19, 19, 19, 19, 19,
      37, 37, 37, 37, 37, 37, 28, 28, 28, 28, 28, 28, 27, 27, 27, 27, 27, 27,
      31, 31, 31, 31, 31, 31, 40, 40, 40, 40, 40, 40, 25, 25, 25, 25, 25, 25,
      24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 33, 33, 33, 33, 33, 33,
      26, 26, 26,
    ],
  },
  daily_units: {
    time: "iso8601",
    temperature_2m_max: "°F",
    temperature_2m_min: "°F",
    uv_index_max: "",
    precipitation_probability_mean: "%",
  },
  daily: {
    time: [
      "2025-05-04",
      "2025-05-05",
      "2025-05-06",
      "2025-05-07",
      "2025-05-08",
      "2025-05-09",
      "2025-05-10",
    ],
    temperature_2m_max: [71.8, 70.7, 74.4, 71, 78.9, 67.7, 70.3],
    temperature_2m_min: [53.8, 50.6, 49.3, 49, 50.3, 51.9, 50.1],
    uv_index_max: [7.7, 7.45, 7.7, 6.95, 7.4, 4.35, 7.35],
    precipitation_probability_mean: [13, 1, 0, 8, 25, 31, 27],
  },
};
