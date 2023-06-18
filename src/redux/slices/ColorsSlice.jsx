import { createSlice } from "@reduxjs/toolkit";

const initialValue = 
import.meta.env.VITE_FILL === "true"
? 
        {
            color: "bg-white"
        }
    : {
        color: "bg-white"
    }
      

export const colorSlice = createSlice({
    name: "colors",
    initialState: initialValue,
    reducers: {
        update: (_, action) => {
          return action.payload;
        },
      }
})

export const { update } = colorSlice.actions;
export default colorSlice.reducer;