import { createSlice } from "@reduxjs/toolkit";

const initialValue =
  import.meta.env.VITE_FILL === "true"
    ? {
        name: "Bhagya Patel",
        designation: "React Developer",
        description:
          "I am passionate developer with an intrigued intereset for Machine Learning as well as Web Development. I never cease to learn and am currently working towards making an impact.",
        email: "bhagyapatel50125@gmail.com",
        phone: "9099883077",
        city: "Surat",
        country: "India",
        website: "https://portfolio-bhagyapatel.vercel.app",
        github: "https://github.com/Code-Knightt",
        linkedin: "https://linkedin.com/Bhagya",
      }
    : {};

export const personalSlice = createSlice({
  name: "personal",
  initialState: initialValue,
  reducers: {
    update: (_, action) => {
      return { ...action.payload };
    },
  },
});

export const { update } = personalSlice.actions;
export default personalSlice.reducer;
