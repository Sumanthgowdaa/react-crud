import { combineReducers, configureStore } from '@reduxjs/toolkit'

import ProductSlice from '../Reducer/ProductReducer'
import UserSlice from '../Reducer/UserReducer'

//combine reducer 
const ProjectReducer = combineReducers({
    users: UserSlice.reducer,
    products: ProductSlice.reducer
})


const AppStore = configureStore({
    reducer: ProjectReducer,
    devTools: true
})

export default AppStore