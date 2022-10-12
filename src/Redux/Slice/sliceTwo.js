import {createSlice} from '@reduxjs/toolkit'


export const sliceTwo = createSlice({
    name:'pagetwo',
    initialState:{
        value:{
            one:'Lets setup a home for all of your work',
            oneSub:'You can always create another workspace later.',
            color:'bg-indigo-500 text-white',
            color2:'bg-indigo-500 text-white',
            color3:'',
            color4:'',
            border:'border-indigo-500',
            num:'2'
        }
    },
    reducers:{
        change_state:(state,action)=>{
                state.value = action.payload.pageTwo
        }
    }
})

export const {change_state} = sliceTwo.actions
export default sliceTwo.reducer