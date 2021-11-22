import React from "react";
import "./styles.css";
import Sidebar from "./SideBar/Sidebar";
import Chat from "./ChatComp/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import { useStateValue } from "./StateProvider";

export default function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="appbody">
          <Router>
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Chat />} />
              <Route exact path="/rooms/:roomId" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}
