import React from "react";
import PersonalSection from "../sections/PersonalSection";
import AcademicSection from "../sections/AcademicSection";
import ExperienceSection from "../sections/ExperienceSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import CourseSection from "../sections/CourseSection";

function Preview() {
  return (
    <div className="w-3/5 h-[90vh] pl-24 py-10 overflow-scroll no-scrollbar">
      {/* Page */}
      <div className="w-full aspect-a4 overflow-hidden bg-white shadow-2xl dark:shadow-white dark:shadow-2xl p-8 scalable-container grid grid-cols-2 gap-x-8 content-baseline">
        <PersonalSection />
        {/* Column 1 */}
        <div>
          <AcademicSection />
          <SkillsSection />
          <CourseSection />
        </div>
        {/* Columns 2 */}
        <div>
          <ExperienceSection />
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}
// grid-rows-[auto_1fr]
export default Preview;
