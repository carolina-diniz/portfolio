import type { JSX } from "react";
import "./contact.style.scss";

export function Contact(): JSX.Element {
  return (
    <div id="contact" className="contact">
      <div className="contact__info">
        <h1 className="contact__title">Conecte-se Comigo</h1>
        <div className="contact__details">
          <p>
            Email:{" "}
            <a href="mailto:caroldinizc21@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__link">caroldinizc21@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/carolina-diniz21" target="_blank" rel="noopener noreferrer" className="contact__link">
              /in/carolina-diniz
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/carolina-diniz" target="_blank" rel="noopener noreferrer" className="contact__link">@carolina-diniz</a>
          </p>
          <p>
            Instagram:{" "}
            <a href="https://www.instagram.com/is_kaworii" target="_blank" rel="noopener noreferrer" className="contact__link">@is_kaworii</a>
          </p>
        </div>
        <p className="contact__message">
          Sempre aberta para trocar ideias, discutir tecnologia e novas
          oportunidades
        </p>
      </div>
      <div className="contact__logo">
        <span>KAWORII</span>
      </div>
    </div>
  );
}
