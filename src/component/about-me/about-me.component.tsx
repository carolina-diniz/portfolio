import type { JSX } from "react";
import "./about-me.style.scss";

export function AboutMe(): JSX.Element {
  return (
    <div id="about-me" className="about-me">
      <div className="about-me__left-section">
        <h1 className="about-me__title">Olá, sou Kaworii</h1>
        <h2 className="about-me__subtitle">
          Desenvolvedor Front-End na Globoplay
        </h2>
      </div>
      <div className="about-me__right-section">
        <p className="about-me__text">
          Com uma base sólida em HTML, CSS e JavaScript, meu dia a dia é
          dedicado a criar e aprimorar experiências para milhões de usuários,
          especialmente em aplicações para TV com React.
        </p>
        <p className="about-me__text">
          Sou movida pela curiosidade e por resolver problemas complexos de
          forma criativa. Acredito no poder da colaboração e na busca contínua
          por aprendizado para construir produtos que realmente façam a
          diferença.
        </p>
        <p className="about-me__text">
          Quando não estou codando, você me encontra jogando, explorando novos
          animes ou descobrindo novos mundos em jogos
        </p>
      </div>
    </div>
  );
}
