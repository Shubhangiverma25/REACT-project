import { useState } from "react";
import "./App.css";
import Usercontextprovider from "./Context/Usercontextprovider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContext.Provider>
      <h1>React with Chai + Context API </h1>
      <Login />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
