import React from "react";
import Main from "../Dashboard/Main";
import Navbar from "../Dashboard/Navbar/Navbar";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import "./Project.css";
import ProjectTable from "./ProjectTable";

function Project() {
  let RenderFlag = window.location.pathname.split("/")[1];
  return (
    <div className="project">
      <Sidebar />
      <div className="projectContainer">
        <Navbar />
        {RenderFlag === "Projects" ? <ProjectTable /> : <Main />}
      </div>
    </div>
  );
}

export default Project;
