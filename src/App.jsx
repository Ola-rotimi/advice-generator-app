import { useState, useEffect } from "react";
import Dice from "./assets/images/icon-dice.svg";
import Divider from "./assets/images/pattern-divider-desktop.svg"

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
      <main className="card">
        <h4 className="advice-id">ADVICE #{adviceId}</h4>
        <h1 className="advice">{`"${advice}"`}</h1>
        <img
          className="divider"
          src={Divider}
          alt=""
        />
        <button className="button" onClick={() => window.location.reload()}>
          <img src={Dice} alt="" />
        </button>
      </main>

      <footer>
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Ola-rotimi">Olarotimi</a>.
        </p>
      </footer>
    </div>
  );
};

export default App;
