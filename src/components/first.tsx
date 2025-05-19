// src/components/HeroSection.tsx
import React from 'react';
import '../style/HeroSection.css';
import { BenefitBoxes } from './boxes';

export const HeroSection: React.FC = () => {
  return (
    // Добавили класс `reveal` — теперь вся секция «выедет» при скролле
    <section className="hero-section">
      <div className="hero-header">
        <div className="hero-header-left">
          <p>Старт</p>
          <p>19 Июня</p>
        </div>
        <div className="hero-header-right">
          <p>Длительность</p>
          <p>2 месяца</p>
        </div>
      </div>

      <div className="hero-container" >
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="highlight reveal">АКАДЕМИЯ</span>
            <span className="label reveal">P2P АРБИТРАЖА</span>
          </h1>

          <p className="hero-description reveal">
            Освой навыки P2P арбитража и начни зарабатывать от 50$ в день уже во время учебы
          </p>

          <button
            className="hero-button reveal"
            onClick={() =>
              window.open('https://t.me/cryptohunter2517', '_blank', 'noopener,noreferrer')
            }
          >
            ПРИСОЕДИНИТЬСЯ
          </button>
        </div>

        <BenefitBoxes />
      </div>
    </section>
  );
};
