import type { JSX } from "react";
import "./portfolio.style.scss";

export function Portfolio(): JSX.Element {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">
        Portfólio & Projetos
        <br />
        Anteriores
      </h1>
      <p>
        Desenvolvo soluções sob medida para diferentes necessidades, desde
        aplicações web responsivas até experiências imersivas para TV.
      </p>
      <p>
        Conheça alguns dos meus trabalhos e veja como posso ajudar a trazer sua
        ideia para o mundo digital.
      </p>
      <a href="#" className="portfolio__explorer">Explorar Projetos</a>
    </div>
  );
}
