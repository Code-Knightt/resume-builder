import React, { useEffect, useState } from "react";
import Template from "./FormTemplate";
import SimpleInput from "../inputs/SimpleInput";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/slices/PersonalSlice";

const fields = [
  {
    type: "text",
    name: "name",
    placeholder: "Name (e.g. John Doe)",
  },
  {
    type: "text",
    name: "designation",
    placeholder: "Designation / Position",
  },
  {
    type: "text",
    name: "description",
    placeholder: "Description (A few lines about yourself)",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email (e.g. johndoe@gmail.com)",
  },
  {
    type: "tel",
    name: "phone",
    placeholder: "Phone (e.g. 9876433241)",
  },
  {
    type: "text",
    name: "country",
    placeholder: "Country",
  },
  {
    type: "text",
    name: "city",
    placeholder: "City",
  },
  {
    type: "text",
    name: "website",
    placeholder: "Website Link",
  },
  {
    type: "text",
    name: "github",
    placeholder: "Github Link",
  },
  {
    type: "text",
    name: "linkedin",
    placeholder: "LinkedIn Link",
  },
];

function PersonalForm() {
  const details = useSelector((state) => state.personal);
  const [personalDetails, setPersonalDetails] = useState(details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update(personalDetails));
  }, [personalDetails]);

  return (
    <Template>
      <form onSubmit={(e) => e.preventDefault()}>
        {fields.map((field) => {
          return (
            <SimpleInput
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={personalDetails}
              onValueChange={setPersonalDetails}
            />
          );
        })}
      </form>
    </Template>
  );
}

export default PersonalForm;
