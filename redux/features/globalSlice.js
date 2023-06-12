import {createSlice} from "@reduxjs/toolkit"

const initialState={
    value:{
        storeID:0
    }
}
export const global=createSlice({
    name:"global",
    initialState,
    reducers:{
        setGlobalstate:(state,action)=>{
            return {
                value:{
                    storeID:action.payload
                }
            }
        },
        getGlobalstate:()=>{
            return initialState
        }
    }
})

export const {getGlobalstate,setGlobalstate}=global.actions;
export default global.reducer;