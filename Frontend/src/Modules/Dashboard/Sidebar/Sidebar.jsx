import React, { useState } from "react";
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { AiFillSetting, AiFillAppstore } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import "./Sidebar.css";

function Sidebar() {
  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.localStorage.clear();
    }, 1000);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="sidebar">
      <div className="brand">
        <h2>
          ZEN<span>LEARN</span>
        </h2>
      </div>
      <ul className="links">
        <li className="sidebarLinks">
          <a className="sideLinkTags" href="Dashboard">
            <SiGoogleanalytics />
            Dashboard
          </a>
        </li>
        <li className="sidebarLinks">
          <a className="sideLinkTags" href="#">
            <AiFillAppstore />
            Courses
          </a>
        </li>
        <li className="sidebarLinks">
          <a className="sideLinkTags" href="#">
            <BiNews />
            Updates
          </a>
        </li>
        <li className="sidebarLinks">
          <a className="sideLinkTags" href="#">
            <BiRocket />
            Challenges
          </a>
        </li>
        <li className="sidebarLinks">
          <a className="sideLinkTags" href="#">
            <BsCashStack />
            Queries
          </a>
        </li>
        <li className="sidebarLinks">
          <a className="sideLinkTags" href="Projects">
            <FaWallet />
            Projects
          </a>
        </li>
        <li className="sidebarLinks">
          <a className="sideLinkTags" href="#">
            <AiFillSetting />
            Settings
          </a>
        </li>
        <li className="sidebarLinks">
          <a className="sideLinkTags" href="#" onClick={handleClick}>
            <MdOutlineLogout />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
