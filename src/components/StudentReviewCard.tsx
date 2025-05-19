// src/components/StudentReviewCard.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../style/StudentReviewCard.css';

type Review = {
  name: string;
  tag?: string;
  avatar: string;
  pointA: string;
  pointB: string;
  quote: string;
};

export const StudentReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const { t } = useTranslation();

  return (
    <div className="student-card reveal">
      <div className="student-header">
        <img
          src={review.avatar}
          alt={review.name}
          className="student-avatar"
        />
        <div className="student-name">{t(review.name)}</div>
        {review.tag && (
          <div className="student-tag">
            {t(review.tag)}
          </div>
        )}
      </div>

      <div className="student-point-a">
        <strong>{t('Точка A:')}</strong>{' '}
        <span
          dangerouslySetInnerHTML={{
            __html: t(review.pointA)
          }}
        />
      </div>

      <div className="student-point-b">
        <strong>{t('Точка Б:')}</strong>{' '}
        <span
          dangerouslySetInnerHTML={{
            __html: t(review.pointB)
          }}
        />
      </div>

      <div className="student-quote">
        <span className="quote-icon">”</span>
        <p>{t(review.quote)}</p>
      </div>
    </div>
  );
};
