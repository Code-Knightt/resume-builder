import React, { useRef } from "react";
import PersonalSection from "../sections/PersonalSection";
import AcademicSection from "../sections/AcademicSection";
import ExperienceSection from "../sections/ExperienceSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import CourseSection from "../sections/CourseSection";
import { useDispatch, useSelector } from "react-redux";
import { toPng } from 'dom-to-image';
import html2canvas from 'html2canvas';


function Preview() {

  const componentRef = useRef(null);

  const captureScreenshot = () => {
    const component = componentRef.current;
  
    // Set styles to prevent text wrapping and hide scrollbars
    component.style.whiteSpace = 'wrap';
    component.style.overflow = 'hidden';
  
    // Capture the screenshot
    toPng(component)
      .then((dataUrl) => {
        // Reset the styles after capturing the screenshot
        component.style.whiteSpace = 'normal';
        component.style.overflow = 'auto';
  
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'screenshot.png';
        link.click();
      })
      .catch((error) => {
        console.error('Error capturing screenshot:', error);
      });
  };
  
  

  const background = useSelector((state) => state.colors);
// console.log(background);
  return (
    <div className={`w-3/5 h-[90vh] pl-24 pr-5 py-10 overflow-scroll no-scrollbar`}>
      {/* Page */}
      <div ref={componentRef} className={`w-full aspect-a4 ${background}  shadow-xl dark:shadow-neutral-800 dark:shadow-3x dark:text-slate-500 p-8 pt-16 scalable-container grid grid-cols-2 gap-x-8 content-baseline rounded-md`}>
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
      <button className="relative top-5 left-[50%] translate-x-[-50%] bg-slate-500 p-2 rounded-md text-slate-50" onClick={captureScreenshot}>Download</button>
    </div>
  );
}
// grid-rows-[auto_1fr]
export default Preview;
