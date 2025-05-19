import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../style/LanguageSwitcherModal.css';

const LanguageSwitcherModal: React.FC = () => {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef<number>(0);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const switchTo = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    lastScrollY.current = window.pageYOffset;

    const handleScroll = () => {
      const currentY = window.pageYOffset;

      if (currentY < lastScrollY.current && currentY > 100) {
        // прокрутили вверх — показываем сразу
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        setVisible(true);
      } else {
        // прокрутили вниз — планируем скрыть через 300 мс
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => {
          setVisible(false);
        }, 300);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  return (
    <div className={`lang-modal ${visible ? 'show' : ''}`}>
      <button
        onClick={() => switchTo('ru')}
        disabled={i18n.language === 'ru'}
        className="lang-btn"
      >
        Рус
      </button>
      <span className="divider">|</span>
      <button
        onClick={() => switchTo('en')}
        disabled={i18n.language === 'en'}
        className="lang-btn"
      >
        Eng
      </button>
    </div>
  );
};

export default LanguageSwitcherModal;
