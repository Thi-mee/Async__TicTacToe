import { useState, createContext, useContext } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import GameRoom from "./pages/GameRoom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Login from "./pages/Login";

export const UserContext = createContext()

export const ProtectedRoute = () => {
  const { loggedIn } = useContext(UserContext)
  return (
    loggedIn ? <Outlet /> : <Navigate to="/login" />
  )
}


function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn }} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} setLoggedIn={setLoggedIn} />} />


        TODO: Redirect known routes to login page if user is not logged in
        <Route path="/home" element={<ProtectedRoute />} >
          <Route index element={<Room />} />
        </Route>
        <Route path="/gameroom/:id" element={<ProtectedRoute />} >
          <Route index element={<GameRoom />} />
        </Route>

        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
