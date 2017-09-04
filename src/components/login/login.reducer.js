import { combineReducers } from 'redux'
import { AUTHENTICATED } from 'alias_utils/js/actions'

const login = (state = false, action) => {
	// console.log(action);
	switch (action.type) {
		case AUTHENTICATED:
			return action;
		default:
			return state;
	}
}

const loginReducer = combineReducers({
	login,
})

export default loginReducer;