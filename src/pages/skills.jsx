import React from 'react';
import skillList from '../assets/data/skillList';

const Skills = () => {
  return (
    <section className="container skills">
      <h1>Skills</h1>
      <div className="skills__container">
        {skillList.map((skill) => {
          return (
            <div className="skills__wrap" key={skill.skillName}>
              <div className="skills__name" id={skill.skillName}>
                <p>{skill.skillName}</p>
              </div>
              <div className="skills__bar">
                <div className={`bar__${skill.skillName}`}>
                  {`${skill.skillBar} %`}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <!-- <img src="assets/img/skills.png" alt="" /> --> */}
      {/* <div className="skills__kotak" /> */}
    </section>
  );
};

export default Skills;
