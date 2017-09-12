import { combineReducers } from 'redux'

const auth = (state = false, action) => {
	// console.log(action);
	switch (action.type) {
		case 'AUTHENTICATED':
			return action._;
		default:
			return state;
	}
}

import wheelReducer from './wheel/wheel.reducer'
const commonReducer = combineReducers({
	auth,
	wheelReducer
})

export default commonReducer;