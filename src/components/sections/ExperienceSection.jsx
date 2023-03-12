import React from "react";
import { useSelector } from "react-redux";

function ExperienceSection() {
  const experiences = useSelector((state) => state.experience);

  if (experiences.length !== 0) {
    return (
      <div className="relative">
        <h1 className="text-c-normal mb-4 font-bold">Work Experience</h1>
        {experiences.map((exp) => {
          return (
            <div className="mb-6" key={exp.id}>
              <h3 className="text-lg font-bold">{exp.position}</h3>
              <div className="flex flex-row justify-between">
                <p className="font-light">{exp.organization}</p>
                <p className="text-sm">
                  {exp.start} {exp.start && exp.end ? "-" : undefined} {exp.end}
                </p>
              </div>
              <ul className="child:font-normal child:text-c-smaller list-disc ml-4">
                {exp.point_one && <li>{exp.point_one}</li>}
                {exp.point_two && <li>{exp.point_two}</li>}
                {exp.point_three && <li>{exp.point_three}</li>}
              </ul>
            </div>
          );
        })}
        <div className="h-[1px] my-4 bg-gray-300 w-full" />
      </div>
    );
  } else {
    return undefined;
  }
}

export default ExperienceSection;
