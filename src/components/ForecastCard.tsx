import { FC } from "react";
import { ForecastDay } from "../types/data";
import { Link } from "react-router-dom";

interface ForecastCardProps {
  day: ForecastDay;
}

const ForecastCard: FC<ForecastCardProps> = ({ day }) => {
  return (
    <li data-testid={`${day.mood}-day`} key={day.date} className="w-full flex">
      <Link
        to={`/forecast/${day.date}`}
        className={`w-full body border border-solid border-gray-200 my-2 p-4 rounded-md shadow-[-4px_4px_6px_var(--color-accent)] ${day.mood.toLowerCase()} flex justify-between items-center`}
        aria-label={`View detailed forecast for ${day.day}`}
      >
        <h2 className="subheading w-1/3 sm:w-1/4">{day.day}</h2>
        <span className="hidden sm:flex w-1/4 items-center">
          <p className="text-[white] bg-[black] rounded-2xl px-2">{day.mood}</p>
        </span>
        <h3 className="subheading mr-3 w-1/3 sm:w-1/4 text-center">
          {day.tempHigh}°/{day.tempLow}°
        </h3>
        <p className="body w-1/3 sm:w-1/4 text-end">view more &rsaquo;</p>
      </Link>
    </li>
  );
};

export default ForecastCard;
