import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import style from "../styles/Home.module.css";
import Loader from "../components/Loader";

function Home() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [loadingState, setLoadingState] = useState(false)
  const navigate = useNavigate()

  const logInAndRedirect = async (e) => {
    setLoadingState(true)
    await loginWithRedirect();    
  };

  useEffect(()=> {
    if (isAuthenticated) {
      setLoadingState(false)
      navigate('home')
    }
  }, [isAuthenticated, navigate])


  const signupandredirect = async () => {
    await loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  } 



  return (
    <div className={style.Homecontainer}>
    {loadingState ? <Loader /> : (
        <>
          <h1>
            <span>Async</span>TicTacToe
          </h1>

          <div className={style.Buttons}>
            <button onClick={logInAndRedirect}>Login</button>
            <button onClick={signupandredirect}>sign up</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
