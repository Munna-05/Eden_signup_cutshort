import {configureStore} from '@reduxjs/toolkit'
import pageOneReducer from './Slice/sliceOne'
import pageTwoReducer from './Slice/sliceTwo'
export default configureStore({
    reducer:{
        pageOne:pageOneReducer,
        pageTwo:pageTwoReducer
    }
})