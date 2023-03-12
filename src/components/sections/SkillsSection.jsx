import React from "react";
import { useSelector } from "react-redux";

function SkillsSection() {
  const data = useSelector((state) => state.skills);

  if (data.length !== 0) {
    return (
      <div>
        <h1 className="text-c-normal mb-4 font-bold">Skills</h1>
        <div className="flex flex-row flex-wrap gap-1 w-full">
          {data.map((skill, index) => {
            {
              if (skill.skillName) {
                return (
                  <div
                    key={skill.skillName + index}
                    className="bg-black px-2 py-1 rounded text-white"
                  >
                    <p>{skill.skillName}</p>
                  </div>
                );
              } else {
                return undefined;
              }
            }
          })}
        </div>
        <div className="h-[1px] my-4 bg-gray-300 w-full" />
      </div>
    );
  } else {
    return undefined;
  }
}

export default SkillsSection;
