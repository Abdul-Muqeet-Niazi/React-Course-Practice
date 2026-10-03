import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
      {skills.map((ability) => (
        <Skill
          skill={ability.skill}
          level={ability.level}
          color={ability.color}
          key={ability.skill}
        />
      ))}
      {/* <Skill skill="HTML+CSS" emoji="🙌" color="Violet" />
      <Skill skill="JavaScript" emoji="💪🏼" color="LightGreen" />
      <Skill skill="Git & Github" emoji="🙌" color="LightBlue" /> */}
    </div>
  );
}

function Skill({ skill, level, color }) {
  console.log(skill, level, color);

  return (
    <div
      className="skill"
      style={{
        backgroundColor: color,
      }}
    >
      <span>{skill}</span>
      <Emoji level={level} />
      {/* <span>{emoji}</span> */}
    </div>
  );
}

function Emoji({ level }) {
  console.log(level);
  if (level === "advanced") {
    return <span>💪🏼</span>;
  } else if (level === "intermediate") {
    return <span>👌🏼</span>;
  } else {
    return <span>🐥</span>;
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>,
);
