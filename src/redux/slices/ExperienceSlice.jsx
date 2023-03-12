import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialValue =
  import.meta.env.VITE_FILL === "true"
    ? [
        {
          id: uuid(),
          position: "CTO",
          organization: "Gradkit",
          point_one: "Prepared and designed the complete backend",
          point_two: "Configured and set up AWS services like EC2 and S3",
          point_three: "Set up razorpay payments integration",
          start: "June 2022",
          end: "March 2023",
        },
        {
          id: uuid(),
          position: "Machine Learning Lead",
          organization: "GDSC SCET Chapter",
          point_one: "Gave Guidance to Enthusiastic Learners",
          point_two: "Prepared Roadmaps for Machine Learning",
          start: "August 2022",
          end: "Present",
        },
        {
          id: uuid(),
          position: "Web Developer",
          organization: "Icon Venture Company",
          point_one: "Delivered the complete website for the company",
          point_two: "Integrated services like Firebase and Discord",
          point_three: "Imporved SEO",
          start: "October 2022",
          end: "January 2023",
        },
      ]
    : [];

export const ExperienceSlice = createSlice({
  name: "experience",
  initialState: initialValue,
  reducers: {
    update: (_, action) => {
      return action.payload;
    },
  },
});

export const { update } = ExperienceSlice.actions;
export default ExperienceSlice.reducer;
