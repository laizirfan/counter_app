import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    //name the slice
    name:'counterApplication',
  //initial value of state
    initialState:{value:0},   

    reducers :{
          //action created inside reducer key

          //increament
          increment:(state,action)=>{
             state.value+=action.payload
          },
          //decrement
          decrement:(state,action)=>{
            state.value-=action.payload
          },
          //reset
            reset:(state)=>{
                state.value=0
            }


    }

})

//slice returns both reducer and action
//action is called by component
//reducer is for store

export const {increment,decrement,reset} = counterSlice.actions

//export reducer
export default counterSlice.reducer