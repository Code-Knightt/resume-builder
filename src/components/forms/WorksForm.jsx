import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/slices/ExperienceSlice";
import Template from "./FormTemplate";
import Experience from "./ListUnit";
import { v4 as uuid } from "uuid";
import {
  deleteObject,
  moveDown,
  moveUp,
  updateObject,
} from "../../helpers/formFunctions";

const fields = [
  {
    name: "position",
    type: "text",
    placeholder: "Position (e.g. Software Management Lead)",
  },
  {
    name: "organization",
    type: "text",
    placeholder: "Organization (e.g. Atlassian)",
  },
  {
    name: "start",
    type: "text",
    placeholder: "Starting Time (e.g. March 2022)",
  },
  {
    name: "end",
    type: "text",
    placeholder: "Ending Time (e.g. Present)",
  },
  {
    name: "point_one",
    type: "text",
    placeholder: "One liner about your primary role",
  },
  {
    name: "point_two",
    type: "text",
    placeholder: "What did you work on at your job",
  },
  {
    name: "point_three",
    type: "text",
    placeholder: "Some Additional Point",
  },
];

function generateTemplate() {
  const id = uuid();
  return {
    id: id,
    position: "",
    organization: "",
    point_one: "",
    point_two: "",
    point_three: "",
    start: "",
    end: "",
  };
}

function WorksForm() {
  const details = useSelector((state) => state.experience);
  const [experienceDetails, setExperienceDetails] = useState(details);
  const dispatch = useDispatch();

  const deleteWork = (object) => {
    deleteObject(object, experienceDetails, setExperienceDetails);
  };

  const updateWork = (object) => {
    updateObject(object, experienceDetails, setExperienceDetails);
  };

  const moveWorkUp = (object) => {
    moveUp(object, experienceDetails, setExperienceDetails);
  };

  const moveWorkDown = (object) => {
    moveDown(object, experienceDetails, setExperienceDetails);
  };

  useEffect(() => {
    dispatch(update(experienceDetails));
  }, [experienceDetails]);

  return (
    <Template>
      {experienceDetails.map((ins, index) => {
        return (
          <Experience
            fields={fields}
            key={ins.id}
            details={ins}
            onDelete={deleteWork}
            updateFields={updateWork}
            moveUp={moveWorkUp}
            moveDown={moveWorkDown}
            isFirst={index === 0}
            isLast={index === experienceDetails.length - 1}
          />
        );
      })}
      <button
        onClick={() => {
          console.log("Update");
          setExperienceDetails([...experienceDetails, generateTemplate()]);
        }}
        className="text-green-500"
      >
        Add
      </button>
    </Template>
  );
}

export default WorksForm;
