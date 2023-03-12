import { configureStore } from "@reduxjs/toolkit";
import personalReducer from "./slices/PersonalSlice.jsx";
import academicReducer from "./slices/AcademicSlice.jsx";
import experienceReducer from "./slices/ExperienceSlice.jsx";
import skillsReducer from "./slices/SkillsSlice.jsx";
import projectsReducer from "./slices/ProjectsSlice.jsx";
import coursesReducer from "./slices/CoursesSlice.jsx";

export default configureStore({
  reducer: {
    personal: personalReducer,
    academic: academicReducer,
    experience: experienceReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    courses: coursesReducer,
  },
});
