import React, { useEffect } from "react";
import Main from "./Modules/Dashboard/Main";
import AuthForm from "./Modules/Auth/AuthForm";
import "./App.css";
import { useSelector } from "react-redux";
import Project from "./Modules/Project/Project";

function App() {
  const user = useSelector((state) => state.user.currentUser?.accessToken);
  let login = user;
  return (
    <div>
      {login === undefined && <AuthForm />}
      {login !== undefined && <Project />}
    </div>
  );
}

export default App;
