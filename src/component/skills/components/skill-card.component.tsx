import type { JSX } from "react";
import "./skill-card.component.scss";

interface SkillCardProps {
  name: string;
}

export function SkillCard(props: SkillCardProps): JSX.Element {
  const { name } = props;

  return (
    <div className="skill-card">
      <img src={`/${name.toLowerCase()}.icon.svg`} alt={`${name} Icon`} className="skill-card__logo"/>
      <span className="skill-card__name">{name}</span>
    </div>
  );
}
