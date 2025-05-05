import { useEffect, useState, FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Forecast from "./pages/Forecast";
import DayView from "./pages/DayView";
import NoPage from "./pages/NoPage";
import { fetchWeather } from "./utilities/fetchWeather";
import { ForecastDay } from "./types/data";

const App: FC = () => {
  const [forecast, setForecast] = useState<ForecastDay[] | null>(null);
  const fallbackCoords = { latitude: 35, longitude: -81 };

  useEffect(() => {
    const loadWeather = async () => {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          const data = await fetchWeather(coords.latitude, coords.longitude);
          setForecast(data);
        },
        async (err) => {
          console.warn("Geolocation failed, using fallback:", err);
          const fallback = await fetchWeather(
            fallbackCoords.latitude,
            fallbackCoords.longitude
          );
          setForecast(fallback);
        }
      );
    };

    loadWeather();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Forecast forecast={forecast} />} />
        <Route
          path="forecast/:date"
          element={<DayView forecast={forecast} />}
        />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
