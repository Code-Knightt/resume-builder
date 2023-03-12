import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/slices/ProjectsSlice";
import Template from "./FormTemplate";
import Project from "./ListUnit";
import { v4 as uuid } from "uuid";
import {
  deleteObject,
  moveDown,
  moveUp,
  updateObject,
} from "../../helpers/formFunctions";

const fields = [
  {
    name: "title",
    type: "text",
    placeholder: "Project Title",
  },
  {
    name: "description",
    type: "text",
    placeholder: "Project Description",
  },
  {
    name: "start",
    type: "text",
    placeholder: "Start Time",
  },
  {
    name: "end",
    type: "text",
    placeholder: "End Time",
  },
  {
    name: "project-link",
    type: "text",
    placeholder: "Project Link",
  },
  {
    name: "code-link",
    type: "text",
    placeholder: "Project Source Link",
  },
];

function generateTemplate() {
  const id = uuid();
  return {
    id,
    title: "",
    description: "",
    start: "",
    end: "",
    "project-link": "",
    "code-link": "",
  };
}

function ProjectsForm() {
  const details = useSelector((state) => state.projects);
  const [projectDetails, setProjectDetails] = useState(details);
  const dispatch = useDispatch();

  const deleteProject = (object) => {
    deleteObject(object, projectDetails, setProjectDetails);
  };

  const updateProject = (object) => {
    updateObject(object, projectDetails, setProjectDetails);
  };

  const moveProjectUp = (object) => {
    moveUp(object, projectDetails, setProjectDetails);
  };

  const moveProjectDown = (object) => {
    moveDown(object, projectDetails, setProjectDetails);
  };

  useEffect(() => {
    dispatch(update(projectDetails));
  }, [projectDetails]);

  return (
    <Template>
      {projectDetails.map((ins, index) => {
        return (
          <Project
            fields={fields}
            key={ins.id}
            details={ins}
            onDelete={deleteProject}
            updateFields={updateProject}
            moveUp={moveProjectUp}
            moveDown={moveProjectDown}
            isFirst={index === 0}
            isLast={index === projectDetails.length - 1}
          />
        );
      })}
      <button
        onClick={() => {
          setProjectDetails([...projectDetails, generateTemplate()]);
        }}
        className="text-green-500"
      >
        Add
      </button>
    </Template>
  );
}

export default ProjectsForm;
