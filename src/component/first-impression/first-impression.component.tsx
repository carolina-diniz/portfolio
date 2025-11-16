import type { JSX } from "react";
import "./first-impression.style.scss";
import { Navigation } from "../navigation/navigation.component";
import { Computer } from "./components/computer.component";

export function FirstImpression(): JSX.Element {
  return (
    <div className="first-impression">
      <Navigation />
      <div className="first-impression__content">
        <div className="first-impression__description">
          <h1 className="first-impression__title">Desenvolvedor Front-End</h1>

          <div className="first-impression__text">
            <p>
              Criando experiências digitais modernas e acessíveis para a web e
              para TV.
            </p>
            <p>
              Transformo ideias em realidade através de código limpo e
              interfaces intuitivas, focando na qualidade e performance do
              produto final.
            </p>
            <a href="#about-me" className="first-impression__link">
              Sobre mim
            </a>
          </div>
        </div>
        <Computer />
      </div>
    </div>
  );
}
