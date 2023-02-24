import { useState } from "react";
import style from "../styles/Loader.module.css";

function Popup({ children, prompt, options, removePrompt, type }) {
  const [choice, setChoice] = useState(null);
  const [text, setText] = useState('')

  const handleChoice = (index) => {
    setChoice(index);
    if (window.confirm("Are you sure about this")) {
      removePrompt(choice);
    }
  };
  const onInputSubmit = (e) => {
    e.preventDefault();
    console.log(text)

    // Send text back
  }


  if (children) {
    return (
      <div className={style.PopupOverLay}>
        <div className={style.Popup}>
          <div className={style.Close}></div>
        {children}
        </div>
      </div>
    );
  }

  if ((type = "input")) {
    return (
      <form className={style.PopupOverLay} onSubmit={onInputSubmit}>
        <div className={style.Popup}>
          <h2>{prompt}</h2>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <input type="submit" value="Search" />
        </div>
      </form>
    );
  }

  return (
    <div className={style.PopupOverLay}>
      <div className={style.Popup}>
        <h2>{prompt}</h2>
        <div className={style.Options}>
          {options.map((opt, index) => {
            return (
              <button key={index} onClick={() => handleChoice(index)}>
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Popup;
