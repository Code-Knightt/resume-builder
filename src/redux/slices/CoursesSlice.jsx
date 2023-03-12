import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialValue =
  import.meta.env.VITE_FILL === "true"
    ? [
        {
          id: uuid(),
          name: "Complete React Course",
          date: "1st April 2022",
          provider: "Udemy",
          link: "https://youtu.be/dQw4w9WgXcQ",
        },
        {
          id: uuid(),
          name: "Complete Data Analytics Course",
          date: "28th February 2023",
          provider: "Coursera",
          link: "https://youtu.be/dQw4w9WgXcQ",
        },
      ]
    : [];

const CoursesSlice = createSlice({
  name: "courses",
  initialState: initialValue,
  reducers: {
    update: (_, action) => {
      return action.payload;
    },
  },
});

export const { update } = CoursesSlice.actions;
export default CoursesSlice.reducer;
