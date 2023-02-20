import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import GameRoom from "./pages/GameRoom";
import Home from "./pages/Home";
import Room from "./pages/Room";

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{user, setUser}} >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Room />} />
      <Route path="/gameroom/:id" element={<GameRoom />} />


      TODO: Redirect known routes to login page if user is not logged in


      <Route path='*' element={<h1>404 - Not Found</h1>} />
    </Routes>
    </UserContext.Provider>
  );
}

export default App;
