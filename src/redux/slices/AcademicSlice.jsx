import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialValue =
  import.meta.env.VITE_FILL === "true"
    ? [
        {
          id: uuid(),
          degree: "B.E. I.T.",
          institute: "Sarvajanik College of Engineering and Technology",
          grade: "9.1 SPI",
          location: "Surat, India",
          start: "August 2020",
          end: "Present",
        },
        {
          id: uuid(),
          degree: "Higher Secondary",
          institute: "L.P. Savani Vidhyabhavan",
          grade: "76%",
          location: "Surat, India",
          start: "July 2018",
          end: "May 2020",
        },
      ]
    : [];

export const AcademicSlice = createSlice({
  name: "academic",
  initialState: initialValue,
  reducers: {
    update: (_, action) => {
      return action.payload;
    },
  },
});

export const { update } = AcademicSlice.actions;
export default AcademicSlice.reducer;
