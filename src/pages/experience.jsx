/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import experienceList from '../assets/data/experienceList';

const Experience = () => {
  return (
    <section className="container experiences">
      <div className="experience">
        <h1>Experiences</h1>
        <div className="experiences__timeline">
          {experienceList.map((exp, i) => {
            return i % 2 === 0 ? (
              <div className="timeline--left" key={i}>
                <h4>{exp.experienceTitle}</h4>
                <p>{exp.experienceDesc}</p>
                <p>
                  <b>Company</b> - {exp.experienceCompany} ({exp.experienceType}
                  )
                </p>
                <p>
                  <b>Duration</b> - {exp.experienceStart} to {exp.experienceEnd}
                </p>
                <p>
                  <b>Location</b> - {exp.experienceLocation}
                </p>
              </div>
            ) : (
              <div className="timeline--right" key={i}>
                <h4>{exp.experienceTitle}</h4>
                <p>{exp.experienceDesc}</p>
                <p>
                  <b>Company</b> - {exp.experienceCompany} ({exp.experienceType}
                  )
                </p>
                <p>
                  <b>Duration</b> - {exp.experienceStart} to {exp.experienceEnd}
                </p>
                <p>
                  <b>Location</b> - {exp.experienceLocation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
