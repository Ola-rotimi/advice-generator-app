import { useState, useEffect } from "react";

import "./App.scss";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(0);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      });
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h4 className="advice-id">ADVICE #{adviceId}</h4>
        <h1 className="advice">{`"${advice}"`}</h1>
        <img className="divider" src="./assets/images/pattern-divider-desktop.svg" alt="divider" />
        <button className="button" onClick={() => window.location.reload()}>
          <img src="./assets/images/icon-dice.svg" alt="dice" />
        </button>
      </div>
    </div>
  );
};

export default App;
