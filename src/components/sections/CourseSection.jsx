import React from "react";
import { useSelector } from "react-redux";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

function CourseSection() {
  const courses = useSelector((state) => state.courses);

  if (courses.length !== 0) {
    return (
      <div className="relative">
        <h1 className="text-c-small mb-4 font-bold">
          Courses and Certifications
        </h1>
        {courses.map((course) => {
          return (
            <div className="mb-6" key={course.id}>
              <div className="flex flex-row items-center gap-x-2">
                <h3 className="text-lg font-bold">{course.name}</h3>
                <p className="font-light text-sm">{course.provider}</p>
              </div>
              {course.date && <p>{course.date}</p>}
              {course["link"] && (
                <a
                  href={course["link"]}
                  target="_blank"
                  className="block text-xs underline"
                >
                  <ArrowTopRightOnSquareIcon className="h-3 w-3 inline-block mr-2" />
                  {course["link"]}
                </a>
              )}
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

export default CourseSection;
