import React from "react";
import PersonalForm from "../forms/PersonalForm";
import AcademicsForm from "../forms/AcademicsForm";
import WorksForm from "../forms/WorksForm";
import ProjectsForm from "../forms/ProjectsForm";
import SkillsForm from "../forms/SkillsForm";
import CoursesForm from "../forms/CoursesForm";

function Forms({ form }) {
  return (
    <div className="flex flex-col w-full relative">
      {(() => {
        switch (form) {
          case 0:
            return <PersonalForm />;
          case 1:
            return <AcademicsForm />;
          case 2:
            return <WorksForm />;
          case 3:
            return <SkillsForm />;
          case 4:
            return <ProjectsForm />;
          case 5:
            return <CoursesForm />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Forms;
