import clsx from "clsx";
import React, { FunctionComponent } from "react";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", "heroBanner")}>
      <div className="container">
        <div className="row">
          <div className="col col--9 col--offset-2">
            <h1 className={clsx("hero__title", "title")}>
              Hi <span className="wave">👋</span>. I'm{" "}
              <span className="highlighted">Suleyman Donmez</span>,
              <br />a Software Engineer.
            </h1>
            <p className={clsx("hero__subtitle", "subtitle")}>
              A software engineer who researches, learns, writes, and implements
              modern web frameworks, programming languages, and software
              development.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
