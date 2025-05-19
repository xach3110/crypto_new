import "../style/BenefitBoxes.css";

import icon1 from '../assets/1.png';
import icon2 from '../assets/2.png';
import icon3 from '../assets/3.png';

export const BenefitBoxes = () => {
  return (
    <div className="benefit-boxes">
      <div className="benefit-box reveal">
        <div className="benefit-icon">
          {/* Подставь сюда свою иконку */}
          <img src={icon1} alt="icon" />
        </div>
        <div className="benefit-text">
          Готовые стратегии и пошаговые инструкции для быстрого старта
        </div>
      </div>

      <div className="benefit-box reveal">
        <div className="benefit-icon">
          <img src={icon2} alt="icon" />
        </div>
        <div className="benefit-text">
          С минимальными вложениями и без опыта
        </div>
      </div>

      <div className="benefit-box reveal">
        <div className="benefit-icon">
          <img src={icon3} alt="icon" />
        </div>
        <div className="benefit-text">
          Под сопровождением опытных арбитражников
        </div>
      </div>
    </div>
  );
};
