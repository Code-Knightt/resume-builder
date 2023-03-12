import React from "react";
import { useSelector } from "react-redux";

function AcademicSection() {
  const institutes = useSelector((state) => state.academic);

  if (institutes.length !== 0) {
    return (
      <div>
        <h1 className="text-c-normal mb-4 font-bold">Academics</h1>
        {institutes.map((ins, index) => {
          return (
            <div className="mb-6" key={ins.institute + index}>
              <div className="flex flex-row justify-between">
                <h3 className="text-lg font-bold">{ins.degree}</h3>
                <p className="font-light">{ins.grade}</p>
              </div>
              <h4 className="mb-2 leading-4">{ins.institute}</h4>
              <p className="text-xs italic">{ins.location}</p>
              <p className="text-sm">
                {ins.start} {ins.start && ins.end ? "-" : undefined} {ins.end}
              </p>
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

export default AcademicSection;
