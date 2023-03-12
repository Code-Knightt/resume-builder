import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialValue =
  import.meta.env.VITE_FILL === "true"
    ? [
        {
          id: uuid(),
          title: "Portfolio Website",
          description: "My personal portfolio website made with React",
          start: "December 2022",
          end: "January 2023",
          "project-link": "https://portfolio-bhagyapatel.vercel.app",
          "code-link": "https://github.com/Code-knightt/portfolio",
        },
        {
          id: uuid(),
          title: "Resume Builder",
          description:
            "An attempt at building resumes without worrying about the layout",
          start: "March 2023",
          end: "March 2023",
          "project-link": "https://portfolio-bhagyapatel.vercel.app",
          "code-link": "https://github.com/Code-knightt/portfolio",
        },
      ]
    : [];

const ProjectsSlice = createSlice({
  name: "projects",
  initialState: initialValue,
  reducers: {
    update: (_, action) => {
      return action.payload;
    },
  },
});

export const { update } = ProjectsSlice.actions;
export default ProjectsSlice.reducer;
