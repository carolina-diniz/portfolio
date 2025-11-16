import type { JSX } from "react";
import { SkillCard } from "./components/skill-card.component";
import "./skill.style.scss";

export function Skills(): JSX.Element {
  const skills = [
    "React",
    "Node.js",
    "TypeScript",
    "Git",
    "Figma",
    "TV Develop",
    "HTML5",
    "CSS3",
    "JavaScript",
    "SASS",
  ];

  return (
    <div className="skills">
      <h2 className="skills__subtitle">
        CADA DESAFIO É UMA CHANCE DE CRIAR ALGO INCRÍVEL.
      </h2>
      <h1 className="skills__title">Habilidades & Experiência</h1>
      <p className="skills__text">
        Atuo no desenvolvimento de interfaces para plataformas de streaming de
        TV e web, garantindo alta qualidade e usabilidade. Minha expertise vai
        da estruturação semântica com HTML e estilização com CSS até o
        desenvolvimento de componentes dinâmicos e interativos com JavaScript e
        React.
      </p>
      <p className="skills__text">
        Para uma visão mais detalhada do meu trabalho e experiência, visite meu{" "}
        <a href="https://github.com/carolina-diniz" target="_blank" rel="noopener noreferrer" className="skills__link">
          GitHub
        </a>
        .
      </p>
      <div className="skills__cards">
        {skills.map((skill) => (
          <SkillCard key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}
