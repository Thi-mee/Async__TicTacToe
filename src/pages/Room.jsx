import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Popup from "../components/Popup";
import style from '../styles/Home.module.css'


function Room() {

  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()
  const {isAuthenticated} = useAuth0()
  const {logout} = useAuth0()


  useEffect(()=> !isAuthenticated && navigate('/'))

    const friends = [
      { name: "Mike", id: "1dd2efr24", active: true },
      { name: "Dayve", id: "23e235347", active: false },
      { name: "Kenny", id: "rremrw4oeir", active: true },
    ];
  return (
    <div className={style.Room}>
      {showPopup && <Popup />}
      {/* <Loader /> */}
      <div className={style.TopBar + ' ' + style.container}>
        <h2>Your Games</h2>
        <button onClick={logout}>Logout</button>
      </div>
      <ul className={style.ul}>
        {friends.map((f) => (
          <li key={f.name}>
            <Link to={`/gameroom/${f.id}`}>{f.name} {f.active ? <span className={style.green}>active</span>: <span className={style.red}>inactive</span>}</Link>
          </li>
        ))}
      </ul>
      <button className={style.new} onClick={() => setShowPopup(true)}>+</button>
    </div>
  );
}

export default Room