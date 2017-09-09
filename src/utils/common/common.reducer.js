import { combineReducers } from 'redux'

import wheelReducer from './wheel/wheel.reducer'

const commonReducer = combineReducers({
	wheelReducer
})

export default commonReducer;