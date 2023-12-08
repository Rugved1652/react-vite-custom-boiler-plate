import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// Define a type for the slice state
interface CounterState {
  value: number; 
  cont: number;
}
//  const [first, setfirst] = useState(second)
// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  cont:10
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setIncrement: (state,action) => {
        console.log("action",action)
        state.value = state.value + action.payload 
    },
    setIncrments2:(state, action) =>{
        state.cont = state.cont + action.payload
    }
  },
});
 export const {setIncrement,setIncrments2} = counterSlice.actions;
export default counterSlice.reducer;
