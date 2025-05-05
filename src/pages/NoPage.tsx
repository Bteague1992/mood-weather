import { FC } from "react";
import { Link } from "react-router-dom";

const NoPage: FC = () => {
  return (
    <section className="flex flex-col items-center p-10 text-center">
      <h1 className="subheading">Sorry, this page doesnt exist</h1>
      <Link
        to="/"
        className="bg-[var(--color-accent)] text-[white] rounded-2xl px-4 py-2 mt-4"
      >
        &larr; Go back to the homepage
      </Link>
    </section>
  );
};

export default NoPage;
