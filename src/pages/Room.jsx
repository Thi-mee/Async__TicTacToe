import axios from "axios";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import style from "../styles/Home.module.css";
import { UserContext } from "../App";


const BASE_URL = "http://localhost:8091";

function Room() {
  const avatars = [
    "/assets/fashionBoyAvatar.png",
    "/assets/purpleHairGirlAvatar.png",
    "/assets/rockGirlAvatar.png",
    "/assets/boyAvatar.png",
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const {user, setUser} = useContext(UserContext)


  const friends = [
    { name: "Mike", id: "1dd2efr24", active: true },
    { name: "Dayve", id: "23e235347", active: false },
    { name: "Kenny", id: "rremrw4oeir", active: true },
  ];

  const saveAvatar = async () => {
    // TODO: Save avatar
    const {data} = await axios.put(`${BASE_URL}/users/${user._id}?avatarLink=${avatars[selectedAvatar]}`, {
      
    })
    // remove popup
    setUser(data.user)
    // setHasAvatar(true);
  };

  return (
    <div className={style.Room}>
      {(!user.hasAvatar) && (
        <Popup>
          <h2>Choose an avatar</h2>
          <div className={style.avatars}>
            {avatars.map((avatarLink, index) => {
              const filename =
                avatarLink.split("/")[avatarLink.split("/").length - 1];
              return (
                <div 
                  key={index} 
                  className={`${style.avatar} ${(selectedAvatar === index) ? style.Selected : ""}`}
                  onClick={() => setSelectedAvatar(index)}>
                  <img
                    src={avatarLink}
                    alt={filename.substring(0, filename.length - 1)}
                  />
                </div>
              );
            })}
          </div>
          <div className={style.Positioner}>
            <button onClick={saveAvatar}>Finish</button>
          </div>
        </Popup>
      )}
      {/* <Loader /> */}
      <div className={style.TopBar + " " + style.container}>
        <h2>Your Games</h2>
        <button 
        // onClick={logout}
        >Logout</button>
      </div>
      <ul className={style.ul}>
        {friends.map((f) => (
          <li key={f.name}>
            <Link to={`/gameroom/${f.id}`}>
              {f.name}{" "}
              {f.active ? (
                <span className={style.green}>active</span>
              ) : (
                <span className={style.red}>inactive</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <button className={style.new} onClick={() => setShowPopup(true)}>
        +
      </button>
      {showPopup && <Popup prompt="Put in your friend's ID" type="input" />}
    </div>
  );
}

export default Room;
