// src/components/Skills.jsx
import React from "react";
import { skillsData } from "../Skills/data";
import "./index.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Proficiency</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skill-category" key={index}>
            <div className="category-header">
              <img src={category.icon} alt={`${category.title} icon`} />
              <h3>{category.title}</h3>
            </div>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx}>
                  <span>{skill.skill}</span>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
