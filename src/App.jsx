import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVAl, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVAl);
      setCalVal(result);
    } else {
      const newDisplayValue = calVAl + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={style.calculator}>
      <Display calVal={calVAl} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
