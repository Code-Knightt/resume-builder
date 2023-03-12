import React, { useState, useEffect } from "react";
import Template from "./FormTemplate";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/slices/AcademicSlice";
import { v4 as uuid } from "uuid";
import Academic from "./ListUnit";
import {
  deleteObject,
  updateObject,
  moveUp,
  moveDown,
} from "../../helpers/formFunctions";

const fields = [
  {
    name: "degree",
    type: "text",
    placeholder: "Degree Name",
  },
  {
    name: "institute",
    type: "text",
    placeholder: "Institute",
  },
  {
    name: "grade",
    type: "text",
    placeholder: "Grade / Percentage",
  },
  {
    name: "location",
    type: "text",
    placeholder: "Location",
  },
  {
    name: "start",
    type: "text",
    placeholder: "Starting Time",
  },
  {
    name: "end",
    type: "text",
    placeholder: "Ending Time",
  },
];

function generateTemplate() {
  const id = uuid();
  return {
    id: id,
    degree: "",
    institute: "",
    grade: "",
    location: "",
    start: "",
    end: "",
  };
}

function AcademicsForm() {
  const details = useSelector((state) => state.academic);
  const [academicDetails, setAcademicDetails] = useState(details);
  const dispatch = useDispatch();

  const deleteAcademic = (object) => {
    deleteObject(object, academicDetails, setAcademicDetails);
  };

  const updateAcademic = (object) => {
    updateObject(object, academicDetails, setAcademicDetails);
  };

  const moveAcademicUp = (object) => {
    moveUp(object, academicDetails, setAcademicDetails);
  };

  const moveAcademicDown = (object) => {
    moveDown(object, academicDetails, setAcademicDetails);
  };

  useEffect(() => {
    dispatch(update(academicDetails));
  }, [academicDetails]);

  return (
    <Template>
      {academicDetails.map((ins, index) => {
        return (
          <Academic
            fields={fields}
            key={ins.id}
            details={ins}
            onDelete={deleteAcademic}
            updateFields={updateAcademic}
            moveUp={moveAcademicUp}
            moveDown={moveAcademicDown}
            isFirst={index === 0}
            isLast={index === academicDetails.length - 1}
          />
        );
      })}
      <button
        onClick={() => {
          setAcademicDetails([...academicDetails, generateTemplate()]);
        }}
        className="text-green-500"
        type="button"
      >
        Add
      </button>
    </Template>
  );
}

export default AcademicsForm;
