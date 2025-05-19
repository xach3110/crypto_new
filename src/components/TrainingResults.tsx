import React from "react";
import { useTranslation } from "react-i18next";
import "../style/TrainingResults.css";

import icon1 from "../assets/icon/1.png";
import icon2 from "../assets/icon/2.png";
import icon3 from "../assets/icon/3.png";
import icon4 from "../assets/icon/4.png";
import icon5 from "../assets/icon/5.png";
import icon6 from "../assets/icon/6.png";
import icon7 from "../assets/icon/7.png";

interface ResultItem {
  id: number;
  icon: any;
  title: string;
  description: string;
}

const results: ResultItem[] = [
  {
    id: 1,
    icon: icon1,
    title: "Вы уверенно зарабатываете 3–5% с каждого торгового цикла",
    description: "и владеете стратегиями для масштабирования прибыли",
  },
  {
    id: 2,
    icon: icon2,
    title: "Умеете анализировать рынок и определять наиболее выгодные временные интервалы",
    description:
      "для покупки и продажи, чтобы максимизировать прибыль с каждого торгового цикла",
  },
  {
    id: 3,
    icon: icon3,
    title: "Имеете навык быстрого наращивания депозита до $1500–$2500",
    description: "с малого старта, действуя по проверенному алгоритму",
  },
  {
    id: 4,
    icon: icon4,
    title: "Обладаете навыками безопасной работы с банками",
    description:
      "и платежными системами, что позволяет избегать блокировок, финансового мониторинга и лишних расходов",
  },
  {
    id: 5,
    icon: icon5,
    title: "Распознаёте мошеннические схемы ещё на этапе коммуникации",
    description: "и уверенно защищаете свои средства и репутацию",
  },
  {
    id: 6,
    icon: icon6,
    title: "Работаете в окружении опытных трейдеров",
    description: "получаете поддержку и растёте вместе с профессиональным сообществом",
  },
];

const TrainingResults: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="training-results reveal">
      <h2 className="training-results__title">
        <span className="green">{t("РЕЗУЛЬТАТИ")}</span> {t("ОБУЧЕНИЯ:")}
      </h2>

      <div className="training-results__grid">
        {results.map((item) => (
          <div className="training-results__item" key={item.id}>
            <div className="training-results__icon-wrapper">
              <img
                src={item.icon}
                alt={t(`icon-${item.id}`)}
                className="training-results__icon"
              />
              <span className="training-results__badge">{item.id}</span>
            </div>
            <h3 className="training-results__item-title">
              {t(item.title)}
            </h3>
            <p className="training-results__description">
              {t(item.description)}
            </p>
          </div>
        ))}
      </div>

      <div className="training-results__final">
        <img
          src={icon7}
          alt={t("final")}
          className="training-results__icon"
        />
        <p className="training-results__final-title">
          {t("Начнете получвать первые деньги еще во время обучения.")}
        </p>
        <p className="training-results__description">
          {t("Быстро овладейде своими инвестициями!")}
        </p>
      </div>
    </section>
  );
};

export default TrainingResults;
