import "../style/EducationSteps.css";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

const steps = [
  {
    title: "ЗА 1-2 НЕДЕЛИ ТЫ ИЗУЧАЕШЬ ВСЮ ТЕОРЕТИЧЕСКУЮ БАЗУ",
    text: "Настроишь аккаунты, подготовишь карты и начнёшь закрывать первые сделки, получая доход.",
    image: step1,
  },
  {
    title: "ГОТОВЫЕ РЕШЕНИЯ В ФОРМАТЕ ЗАПИСИ ЭКРАНА",
    text: "После которых ты тренируешься с минимальным банком и получаешь первую прибыль.",
    image: step2,
  },
  {
    title: "НАЧИНАЕШЬ ЗАРАБАТЫВАТЬ ОЩУТИМЫЕ ДЕНЬГИ КАЖДЫЙ ДЕНЬ",
    text: "Потом ты увеличиваешь оборотный капитал, постепенно наращивая его и тестируя новые связки.",
    image: step3,
  },
  {
    title: "ПОЛУЧАЕШЬ ОБРАТНУЮ СВЯЗЬ ОТ КОМАНДЫ P2P АКАДЕМИИ",
    text: "(по каждому вопросу, который у тебя возникает).",
    image: step4,
  },
];

export const EducationSteps = () => {
  return (
    <section className="education-section reveal">
      <h2 className="education-title">КАК ПРОХОДИТ ОБУЧЕНИЕ</h2>
      <div className="education-grid">
        {steps.map((step, i) => (
          <div className="education-card" key={i}>
            <div className="card-text">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
            <div className="card-image">
              <img src={step.image} alt={`Step ${i + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
