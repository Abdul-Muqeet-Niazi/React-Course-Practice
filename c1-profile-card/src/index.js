import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={process.env.PUBLIC_URL + "/profile.jpg"}
      alt="Developer-Picture"
    ></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>Abdul Muqeet</h1>
      <p>
        Front-End web developer and student at IQRA University. When not coding
        or preparing study notes, then I like to play chess or cards, or atleast
        watching web-series.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="🙌" color="Violet" />
      <Skill skill="JavaScript" emoji="💪🏼" color="LightGreen" />
      <Skill skill="Git & Github" emoji="🙌" color="LightBlue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: props.color,
      }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>,
);
