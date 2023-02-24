import { useNavigate } from "react-router-dom";
import style from "../styles/Home.module.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={style.Homecontainer}>
      <h1>
        <span>Async</span>TicTacToe
      </h1>

      <div className={style.Buttons}>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>sign up</button>
      </div>
    </div>
  );
}

export default Home;
