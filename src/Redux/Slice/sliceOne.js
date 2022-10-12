import {createSlice} from '@reduxjs/toolkit'

export const sliceOne = createSlice({
    name:'pageOne',
    initialState:{
        value:'1'
    },
    reducers:{
        change_state:(state,action)=>{
                state.value = action.payload.pageOne
        }
    }
})

export const {change_state} = sliceOne.actions
export default sliceOne.reducer