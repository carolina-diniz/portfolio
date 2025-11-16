import { useState, type JSX, useLayoutEffect } from "react";
import "./navigation.style.scss";

export function Navigation(): JSX.Element {
  const [logoName, setLogoName] = useState("Kaworii");

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setLogoName((prev) =>
        prev === "Kaworii" ? "Kaworii" : "Kaworii"
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navigation">
      <span className="navigation__logo">{logoName}</span>
      <a href="#contact">
        <button className="navigation__contact">Contato</button>
      </a>
    </nav>
  );
}
