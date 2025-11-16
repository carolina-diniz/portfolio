import type { JSX } from "react";
import "./computer.style.scss";

export function Computer(): JSX.Element {
  return (
    <div className="computer">
      <div className="computer__monitor">
        <div className="computer__screen">
          <div className="computer__vscode">
            <div className="computer__vscode-bar">
              <div className="computer__buttons">
                <span className="computer__button computer__button--red" />
                <span className="computer__button computer__button--yellow" />
                <span className="computer__button computer__button--green" />
              </div>
            </div>
            <div className="computer__code-screen">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((lineNum) => (
                <div key={lineNum} className="computer__code-line">
                  <span className="computer__line-number">{lineNum}</span>
                  <span className="computer__code-block" data-line={lineNum} />
                </div>
              ))}
            </div>
          </div>
          <div className="computer__browser">
            <div className="computer__browser-bar">
              <div className="computer__buttons">
                <span className="computer__button computer__button--red" />
                <span className="computer__button computer__button--yellow" />
                <span className="computer__button computer__button--green" />
              </div>
            </div>
            <div className="computer__browser-screen">
              {/* Hero Section */}
              <div className="computer__section computer__section--hero">
                <div className="computer__hero-text computer__hero-text--large" />
                <div className="computer__hero-text computer__hero-text--medium" />
                <div className="computer__hero-button" />
              </div>

              {/* Features Section */}
              <div className="computer__section computer__section--features">
                <div className="computer__section-title" />
                <div className="computer__feature-grid">
                  {[1, 2].map((i) => (
                    <div key={i} className="computer__feature-card">
                      <div className="computer__card-icon" />
                      <div className="computer__card-line computer__card-line--title" />
                      <div className="computer__card-line computer__card-line--text" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="computer__section computer__section--content">
                <div className="computer__section-title" />
                <div className="computer__content-block">
                  <div className="computer__content-line computer__content-line--long" />
                  <div className="computer__content-line computer__content-line--medium" />
                  <div className="computer__content-line computer__content-line--short" />
                </div>
              </div>

              {/* Gallery Section */}
              <div className="computer__section computer__section--gallery">
                <div className="computer__section-title" />
                <div className="computer__gallery-grid">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="computer__gallery-item" data-item={i} />
                  ))}
                </div>
              </div>

              {/* Footer Section */}
              <div className="computer__section computer__section--footer">
                <div className="computer__footer-line computer__footer-line--title" />
                <div className="computer__footer-line computer__footer-line--subtitle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="computer__base">
        <div className="computer__power-button" />
      </div>
      <div className="computer__leg1" />
      <div className="computer__leg2" />
      <div className="computer__stand" />
    </div>
  );
}
