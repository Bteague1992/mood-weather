export type ForecastDay = {
  day: string;
  date: string;
  tempHigh: number;
  tempLow: number;
  uvIndex: number;
  rainChance: number;
  feelsLike: number;
  windSpeed: number;
  cloudCover: number;
  mood: string;
  emoji: string;
  outfit: string;
  activity: string;
};

export type Mood = {
  mood: string;
  emoji: string;
  outfit: string;
  activity: string;
};

export interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  hourly_units: {
    time: string;
    apparent_temperature: string;
    cloudcover: string;
    windspeed_10m: string;
    precipitation_probability: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    uv_index_max: number[];
    precipitation_probability_mean: number[];
    wind_speed_10m_max?: number[];
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    uv_index_max: string;
    precipitation_probability_mean: string;
  };
  hourly: {
    time: string[];
    apparent_temperature: number[];
    cloudcover: number[];
    windspeed_10m: number[];
    precipitation_probability: number[];
  };
}

export type ApiParams = {
  latitude: number;
  longitude: number;
  hourly: string;
  daily: string;
  temperature_unit: string;
  windspeed_unit: string;
  timezone: string;
};
