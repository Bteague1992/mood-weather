import { FC } from "react";
import { ForecastDay } from "../types/data";
import { Link, useParams } from "react-router-dom";

interface DayViewPageProps {
  forecast: ForecastDay[] | null;
}

const DayViewPage: FC<DayViewPageProps> = ({ forecast }) => {
  const { date } = useParams<{ date: string }>();
  const day = forecast?.find((d) => d.date === date) || null;

  if (!day) {
    return (
      <section>
        <h2 className="text-xl font-semibold mb-4">Forecast Detail</h2>
        <p>No forecast available for this date.</p>
      </section>
    );
  }

  return (
    <section className="p-4">
      <Link to="/">&larr; Back</Link>
      <h2 className="text-2xl font-bold mb-4">
        {day.day} – {day.mood} {day.emoji}
      </h2>
      <dl className="space-y-2">
        <div>
          <dt className="font-semibold">High Temp:</dt>
          <dd>{day.tempHigh}°F</dd>
        </div>
        <div>
          <dt className="font-semibold">Low Temp:</dt>
          <dd>{day.tempLow}°F</dd>
        </div>
        <div>
          <dt className="font-semibold">Feels Like:</dt>
          <dd>{day.feelsLike}°F</dd>
        </div>
        <div>
          <dt className="font-semibold">Wind Speed:</dt>
          <dd>{day.windSpeed} mph</dd>
        </div>
        <div>
          <dt className="font-semibold">UV Index:</dt>
          <dd>{day.uvIndex}</dd>
        </div>
        <div>
          <dt className="font-semibold">Rain Chance:</dt>
          <dd>{day.rainChance}%</dd>
        </div>
        <div>
          <dt className="font-semibold">Cloud Cover:</dt>
          <dd>{day.cloudCover}%</dd>
        </div>
        <div>
          <dt className="font-semibold">Suggested Outfit:</dt>
          <dd>{day.outfit}</dd>
        </div>
        <div>
          <dt className="font-semibold">Suggested Activity:</dt>
          <dd>{day.activity}</dd>
        </div>
      </dl>
    </section>
  );
};

export default DayViewPage;
