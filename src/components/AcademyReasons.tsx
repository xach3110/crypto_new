import "../style/AcademyReasons.css";
import centerImage from "../assets/cent_img.png"; // или замени на свой путь
export const AcademyReasons = () => {
  return (
    <section className="academy-section">
      <div className="academy-container">
        {/* Левая часть */}
        <div className="academy-left">
          <h2>
            ВАМ В <br />
            <span>АКАДЕМИЮ,</span> <br />
            <span className="highlight">ЕСЛИ:</span>
          </h2>
        </div>

        {/* Правая часть — круг */}
        <div className="academy-circle">
          <div className="sector sector-1">
            <p>
              <span className="step">/01</span><br />
              <span className="text-highlight">Вы новичок</span> и ищите способ, как начать зарабатывать на крипте
            </p>
          </div>
          <div className="sector sector-2">
            <p>
              <span className="step">/02</span><br />
              <span className="text-highlight">Вы хочете работать с любого места на планете, </span>
              и сами выбираете, когда и сколько работать
            </p>
          </div>
          <div className="sector sector-3">
            <p>
              <span className="step">/03</span><br />
              <span className="text-highlight">Вы уже вложили деньги в P2P и проиграли, </span>
              и сейчас ищите способ вернуть свои деньги
            </p>
          </div>
          <div className="sector sector-4">
            <p>
              <span className="step">/04</span><br />
              <span className="text-highlight">Вы торгуете класичной криптой, </span>
              и ищете способ, как увеличить свою прибыль
            </p>
          </div>

          {/* Центральный кружок */}
          <div className="center-image">
            <img src={centerImage} alt="Center icon" />
          </div>
        </div>
        </div>
        <div className="academy-left-result">
            <h2>
                <span>Результати</span> <br />
                <span>наших учнів:</span>
            </h2>
        </div>
    </section>
  );
};
