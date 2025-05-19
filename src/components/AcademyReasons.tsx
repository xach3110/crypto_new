import React from 'react';
import { useTranslation } from 'react-i18next';
import '../style/AcademyReasons.css';

import centerImage from '../assets/cent_img.png';
import rocket from '../assets/rocket.png';

import { StudentReviewCard } from './StudentReviewCard';

import rawReviews from '../json/reviews.json';

interface Review {
  name: string;
  tag?: string;
  avatar: string;
  pointA: string;
  pointB: string;
  quote: string;
}

const reviews = rawReviews as Review[];

export const AcademyReasons: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="academy-section">
      <div className="academy-container">
        {/* Левая часть */}
        <div className="academy-left reveal">
          <h2>
            {t('ВАМ В')} <br />
            <span>{t('АКАДЕМИЮ,')}</span> <br />
            <span className="highlight">{t('ЕСЛИ:')}</span>
          </h2>
        </div>

        {/* Правая часть — круг */}
        <div className="academy-circle reveal">
          <div className="sector sector-1">
            <p>
              <span className="step">/01</span><br />
              <span className="text-highlight">{t('Вы новичок')}</span> {t('и ищите способ, как начать зарабатывать на крипте')}
            </p>
          </div>
          <div className="sector sector-2">
            <p>
              <span className="step">/02</span><br />
              <span className="text-highlight">{t('Вы хотите работать с любого места на планете, ')}</span>
              {t('и сами выбираете, когда и сколько работать')}
            </p>
          </div>
          <div className="sector sector-3">
            <p>
              <span className="step">/03</span><br />
              <span className="text-highlight">{t('Вы уже вложили деньги в P2P и проиграли, ')}</span>
              {t('и сейчас ищите способ вернуть свои деньги')}
            </p>
          </div>
          <div className="sector sector-4">
            <p>
              <span className="step">/04</span><br />
              <span className="text-highlight">{t('Вы торгуете классической криптой, ')}</span>
              {t('и ищете способ, как увеличить свою прибыль')}
            </p>
          </div>

          {/* Центральный кружок */}
          <div className="center-image">
            <img src={centerImage} alt={t('Центральная иконка')} />
          </div>
        </div>
      </div>

      <div className="academy-results-row reveal">
        <div className="academy-left-result">
          <h2>
            <span>{t('Результати')}</span> <br />
            <span>{t('наших учеников:')}</span>
          </h2>
        </div>
        <div className="academy-right-result">
          <h2>
            <span>{t('Наши учащиеся начинают свой путь с 50$ и достигают реальных результатов благодаря проверенным стратегиям')}</span>
          </h2>
        </div>
      </div>

      <div className="student-reviews-column">
        {reviews.map((r, i) => (
          <StudentReviewCard key={i} review={r} />
        ))}
      </div>

      <div className="invite-block reveal">
        <div className="invite-inner">
          <div className="invite-left">
            <img src={rocket} alt={t('Ракета')} />
          </div>
          <div className="invite-right">
            <h2>
              <span>{t('Настало время для вашей финансовой свободы')}</span> <br />
              <span className="small">{t('Оставьте заявку и начните свой путь в P2P сегодня!')}</span>
            </h2>
            <button
              className="invite-button"
              onClick={() =>
                window.open('https://t.me/cryptohunter2517', '_blank', 'noopener,noreferrer')
              }
            >
              {t('Telegram для вашего старта')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};