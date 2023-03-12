import React, { useEffect, useState } from "react";
import Template from "./FormTemplate";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/slices/CoursesSlice";
import Course from "./ListUnit";
import { v4 as uuid } from "uuid";
import {
  deleteObject,
  updateObject,
  moveUp,
  moveDown,
} from "../../helpers/formFunctions";

const fields = [
  {
    type: "text",
    name: "name",
    placeholder: "Certification name",
  },
  {
    type: "text",
    name: "date",
    placeholder: "Date of Completion",
  },
  {
    type: "text",
    name: "provider",
    placeholder: "Certification Provider (e.g. Coursera)",
  },
  {
    type: "text",
    name: "link",
    placeholder: "Link to certification",
  },
];

function SkillsForm() {
  const details = useSelector((state) => state.courses);
  const [courses, setCourses] = useState(details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update(courses));
  }, [courses]);

  function generateTemplate() {
    const id = uuid();
    return {
      id: id,
      name: "",
      date: "",
      provider: "",
      link: "",
    };
  }

  const deleteCourse = (object) => {
    deleteObject(object, courses, setCourses);
  };

  const updateCourse = (object) => {
    updateObject(object, courses, setCourses);
  };

  const moveCourseUp = (object) => {
    moveUp(object, courses, setCourses);
  };

  const moveCourseDown = (object) => {
    moveDown(object, courses, setCourses);
  };

  return (
    <Template>
      {courses.map((ins, index) => {
        return (
          <Course
            fields={fields}
            key={ins.id}
            details={ins}
            onDelete={deleteCourse}
            updateFields={updateCourse}
            moveUp={moveCourseUp}
            moveDown={moveCourseDown}
            isFirst={index === 0}
            isLast={index === courses.length - 1}
          />
        );
      })}
      <button
        onClick={() => {
          setCourses([...courses, generateTemplate()]);
        }}
        className="text-green-500"
        type="button"
      >
        Add
      </button>
    </Template>
  );
}

export default SkillsForm;
