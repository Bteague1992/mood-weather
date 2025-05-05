import { FC } from "react";
import { ForecastDay } from "../types/data";
import { Link } from "react-router-dom";

interface ForecastPageProps {
  forecast: ForecastDay[] | null;
}

const ForecastPage: FC<ForecastPageProps> = ({ forecast }) => {
  if (!forecast) return <p>Loading...</p>;
  if (forecast.length === 0) return <p>No forecast available.</p>;

  return (
    <section className="p-4">
      <h1 className="heading mb-4">7 Day Forecast</h1>
      <ul>
        {forecast.map((day) => (
          <li key={day.date}>
            <Link
              to={`/forecast/${day.date}`}
              className="body border border-solid border-gray-200 m-4"
            >
              <span className="font-medium">
                {day.day} - {day.tempHigh}°/{day.tempLow}°
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ForecastPage;
