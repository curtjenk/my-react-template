import { combineReducers } from 'redux'
import authReducer from './AuthReducer'

const rootReducer = combineReducers({
    authReducer: authReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;