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
      <section data-testid="no-data">
        <p>No forecast available for this date.</p>
      </section>
    );
  }

  return (
    <section className="p-4" role="main">
      <Link
        to="/"
        className="subheading"
        aria-label="Back to forecast overview"
      >
        &larr; Back
      </Link>
      <article
        data-testid={`day-view-${day.date}`}
        className={
          "w-full max-w-[1200px] border border-solid border-gray-200 my-2 overflow-hidden rounded-md shadow-[-4px_4px_6px_var(--color-accent)]"
        }
      >
        <header
          className={`${day.mood.toLowerCase()} w-full heading text-center border-b border-solid border-black-200 p-2`}
        >
          <h2>{day.day}</h2>
        </header>
        <div className="w-full flex flex-col items-center mt-4 md:flex-row md:justify-center">
          <span className="text-5xl md:mr-[100px]" aria-hidden="true">
            {day.emoji}
          </span>
          <span className="flex items-center">
            <h3 className="subheading mr-3">Mood:</h3>
            <p>{day.mood}</p>
          </span>
        </div>
        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-3 sm:p-5">
          <div className="sm:text-start">
            <dt className="bodybody">High/Low:</dt>
            <dd className="caption">
              {day.tempHigh}°F/{day.tempLow}°F
            </dd>
          </div>
          <div className="text-end sm:text-center">
            <dt className="body">Feels Like:</dt>
            <dd className="caption">{day.feelsLike}°F</dd>
          </div>
          <div className="sm:text-end">
            <dt className="body">Wind Speed:</dt>
            <dd className="caption">{day.windSpeed} mph</dd>
          </div>
          <div className="text-end sm:text-start">
            <dt className="body">UV Index:</dt>
            <dd className="caption">{day.uvIndex}</dd>
          </div>
          <div className="sm:text-center">
            <dt className="body">Rain Chance:</dt>
            <dd className="caption">{day.rainChance}%</dd>
          </div>
          <div className="text-end">
            <dt className="body">Cloud Cover:</dt>
            <dd className="caption">{day.cloudCover}%</dd>
          </div>
          <div>
            <dt className="body">Suggested Outfit:</dt>
            <dd className="caption">{day.outfit}</dd>
          </div>
          <div className="text-end sm:text-center">
            <dt className="body">Suggested Activity:</dt>
            <dd className="caption">{day.activity}</dd>
          </div>
        </dl>
      </article>
    </section>
  );
};

export default DayViewPage;
