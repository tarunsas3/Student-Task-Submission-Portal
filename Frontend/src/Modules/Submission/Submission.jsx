import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submit } from "../../redux/apiCalls";
import "./Submission.css";
import Popup from "../Dashboard/Popup";
import Success from "./Success";
import { BiDownArrow } from "react-icons/bi";

function Submission() {
  const [openPopup, setOpenPopup] = useState(false);
  const [sourceUrl, setCodeUrl] = useState("");
  const [deploymentUrl, setDeployUrl] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const [Icon, setIcon] = useState("dropDownCollapsed");
  const [options, setOptions] = useState("optionsCollapsed");
  const [title, setTitle] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    submit(dispatch, { title, sourceUrl, deploymentUrl, description });
    setTimeout(() => {
      setOpenPopup(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, 1000);
  };

  const toggleDropDown = () => {
    if (Icon === "dropDownCollapsed") {
      setIcon("dropDownExpanded");
    } else {
      setIcon("dropDownCollapsed");
    }
  };

  const toggleOptions = () => {
    if (options === "optionsCollapsed") {
      setOptions("optionsExpanded");
    } else {
      setOptions("optionsCollapsed");
    }
  };

  const handleEvents = () => {
    toggleDropDown();
    toggleOptions();
  };

  return (
    <div className="submissionWrapper">
      <div class="submissionContainer">
        {/* <div class="brand-titleText">Fullstack e-Commerce Application</div> */}
        <ul>
          <div className="dropDownContainer" onClick={handleEvents}>
            <input
              className="submissionInput"
              type="text"
              placeholder="Task"
              readOnly
              value={title}
            />
            <BiDownArrow className={"dropDownIcon " + Icon} />
          </div>
          <ul className={"dropDownOptions " + options} onClick={handleEvents}>
            <li
              className="dropDownChoice"
              onClick={(e) => setTitle("Fullstack e-Commerce Application")}
            >
              Fullstack e-Commerce Application
            </li>
            <li
              className="dropDownChoice"
              onClick={(e) => setTitle("Fullstack Blog Application")}
            >
              Fullstack Blog Application
            </li>
            <li
              className="dropDownChoice"
              onClick={(e) => setTitle("MERN Stack Chat Application")}
            >
              MERN Stack Chat Application
            </li>
            <li
              className="dropDownChoice"
              onClick={(e) =>
                setTitle(" MERN Stack Video Conference Application")
              }
            >
              MERN Stack Video Conference Application
            </li>
            <li
              className="dropDownChoice"
              onClick={(e) =>
                setTitle("Fullstack Student task Submission Portal")
              }
            >
              Fullstack Student task Submission Portal
            </li>
            <li
              className="dropDownChoice"
              onClick={(e) => setTitle("MERN Stack Todo Application")}
            >
              MERN Stack Todo Application
            </li>
          </ul>
        </ul>
        <div class="submissionInputContainer">
          <input
            className="submissionInput"
            type="text"
            placeholder="Source Code Url"
            onChange={(e) => setCodeUrl(e.target.value)}
          />
          <input
            className="submissionInput"
            type="text"
            placeholder="Deployment Url"
            onChange={(e) => setDeployUrl(e.target.value)}
          />
          <textarea
            rows="8"
            cols="40"
            className="submissionInput description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="submissionBtn" type="submit" onClick={handleClick}>
            Submit
          </button>
          <Popup
            title="Zen Learn - Quick Task Submission"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            {/* <Success /> */}
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Submission;
