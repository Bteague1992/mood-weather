import { FC } from "react";
import { ForecastDay } from "../types/data";
import ForecastCard from "../components/ForecastCard";

interface ForecastPageProps {
  forecast: ForecastDay[] | null;
}

const ForecastPage: FC<ForecastPageProps> = ({ forecast }) => {
  if (!forecast) return <p>Loading...</p>;
  if (forecast.length === 0) return <p>No forecast available.</p>;

  return (
    <section
      role="main"
      className="py-4 w-full max-w-[1200px] flex flex-col items-center"
    >
      <h1 className="subheading mb-4">7 Day Forecast</h1>
      <ul className="w-full">
        {forecast.map((day) => (
          <ForecastCard key={day.date} day={day} />
        ))}
      </ul>
    </section>
  );
};

export default ForecastPage;
