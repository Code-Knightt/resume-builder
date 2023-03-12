import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialValue =
  import.meta.env.VITE_FILL === "true"
    ? [
        {
          id: uuid(),
          skillName: "ReactJS",
        },
        {
          id: uuid(),
          skillName: "NodeJS",
        },
        {
          id: uuid(),
          skillName: "MongoDB",
        },
        {
          id: uuid(),
          skillName: "AWS",
        },
        {
          id: uuid(),
          skillName: "Tailwind CSS",
        },
        {
          id: uuid(),
          skillName: "Figma",
        },
        {
          id: uuid(),
          skillName: "Python",
        },
        {
          id: uuid(),
          skillName: "Machine Learning",
        },
        {
          id: uuid(),
          skillName: "Prisma ORM",
        },
        {
          id: uuid(),
          skillName: "Golang",
        },
        {
          id: uuid(),
          skillName: "Java",
        },
      ]
    : [];

const SkillsSlice = createSlice({
  name: "skills",
  initialState: initialValue,
  reducers: {
    update: (_, action) => {
      return action.payload;
    },
  },
});

export const { update } = SkillsSlice.actions;
export default SkillsSlice.reducer;
