import { FC } from "react";

const Header: FC = () => {
  return (
    <header
      data-testid="header"
      className="w-full p-3 bg-[var(--color-surface)] text-[var(--color-text)] flex justify-center items-center shadow-md rounded-md"
    >
      <h1 className="heading">WeatherMood</h1>
    </header>
  );
};

export default Header;
