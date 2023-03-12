import React, { useEffect, useState } from "react";
import Template from "./FormTemplate";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/slices/SkillsSlice";
import Skill from "./ListUnit";
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
    name: "skillName",
    placeholder: "Enter a skill",
  },
];

function SkillsForm() {
  const details = useSelector((state) => state.skills);
  const [skills, setSkills] = useState(details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update(skills));
  }, [skills]);

  function generateTemplate() {
    const id = uuid();
    return {
      id: id,
      skillName: "",
    };
  }

  const deleteSkill = (object) => {
    deleteObject(object, skills, setSkills);
  };

  const updateSkill = (object) => {
    updateObject(object, skills, setSkills);
  };

  const moveSkillUp = (object) => {
    moveUp(object, skills, setSkills);
  };

  const moveSkillDown = (object) => {
    moveDown(object, skills, setSkills);
  };

  return (
    <Template>
      {skills.map((ins, index) => {
        return (
          <Skill
            fields={fields}
            key={ins.id}
            details={ins}
            onDelete={deleteSkill}
            updateFields={updateSkill}
            moveUp={moveSkillUp}
            moveDown={moveSkillDown}
            isFirst={index === 0}
            isLast={index === skills.length - 1}
          />
        );
      })}
      <button
        onClick={() => {
          setSkills([...skills, generateTemplate()]);
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
