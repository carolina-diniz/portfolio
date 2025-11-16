import type { JSX } from "react";
import { FirstImpression } from "./component/first-impression/first-impression.component";
import "./app.scss";
import { AboutMe } from "./component/about-me/about-me.component";
import { Skills } from "./component/skills/skills.component";
import { Portfolio } from "./component/portfolio/portfolio.component";
import { Contact } from "./component/contact/contact.component";

export function App(): JSX.Element {
  return (
    <div className="main">
      <div className="main__content">
        <FirstImpression />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
