import React from 'react';
import { useTranslation } from 'react-i18next';
import '../style/BenefitBoxes.css';

import icon1 from '../assets/1.png';
import icon2 from '../assets/2.png';
import icon3 from '../assets/3.png';

export const BenefitBoxes: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="benefit-boxes">
      <div className="benefit-box reveal">
        <div className="benefit-icon">
          <img src={icon1} alt={t('Иконка 1')} />
        </div>
        <div className="benefit-text">
          {t('Готовые стратегии и пошаговые инструкции для быстрого старта')}
        </div>
      </div>

      <div className="benefit-box reveal">
        <div className="benefit-icon">
          <img src={icon2} alt={t('Иконка 2')} />
        </div>
        <div className="benefit-text">
          {t('С минимальными вложениями и без опыта')}
        </div>
      </div>

      <div className="benefit-box reveal">
        <div className="benefit-icon">
          <img src={icon3} alt={t('Иконка 3')} />
        </div>
        <div className="benefit-text">
          {t('Под сопровождением опытных арбитражников')}
        </div>
      </div>
    </div>
  );
};