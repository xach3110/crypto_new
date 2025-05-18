import React from "react";
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
    title: "Впевнено заробляєте 3–5% з кожного торгового циклу",
    description: "та володієте стратегіями для масштабування прибутку",
  },
  {
    id: 2,
    icon: icon2,
    title: "Вмієте аналізувати ринок і визначати найвигідніші часові проміжки",
    description: "для купівлі та продажу, щоб максимізувати прибуток з кожного торгового циклу",
  },
  {
    id: 3,
    icon: icon3,
    title: "Маєте навичку швидкого нарощування депозиту до $1500–$2500",
    description: "з малого старту, діючи за перевіреним алгоритмом",
  },
  {
    id: 4,
    icon: icon4,
    title: "Володієте навичками безпечної роботи з банками",
    description: "та платіжними системами, що дозволяє уникати блокувань, фінансового моніторингу та зайвих витрат",
  },
  {
    id: 5,
    icon: icon5,
    title: "Розпізнаєте шахрайські схеми ще на етапі комунікації",
    description: "та впевнено захищаєте свої кошти та репутацію",
  },
  {
    id: 6,
    icon: icon6,
    title: "Працюєте в оточенні досвідчених трейдерів",
    description: "отримуєте підтримку та зростаєте разом з професійною спільнотою",
  },
];

const TrainingResults: React.FC = () => {
  return (
    <section className="training-results">
      <h2 className="training-results__title">
        <span className="green">РЕЗУЛЬТАТИ</span> НАВЧАННЯ:
      </h2>

      <div className="training-results__grid">
        {results.map((item) => (
          <div className="training-results__item" key={item.id}>
            <div className="training-results__icon-wrapper">
              <img src={item.icon} alt={`icon-${item.id}`} className="training-results__icon" />
              <span className="training-results__badge">{item.id}</span>
            </div>
            <h3 className="training-results__item-title">{item.title}</h3>
            <p className="training-results__description">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="training-results__final">
        <img src={icon7} alt="final" className="training-results__icon" />
        <p className="training-results__final-title">
          Почнете отримувати перший прибуток вже під час навчання,
        </p>
        <p className="training-results__description">
          швидко окуповуючи свої інвестиції.
        </p>
      </div>
    </section>
  );
};

export default TrainingResults;
