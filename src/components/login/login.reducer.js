import { combineReducers } from 'redux'
import { AUTHENTICATED } from 'alias_utils/js/actions'

const auth = (state = false, action) => {
	// console.log(action);
	switch (action.type) {
		case AUTHENTICATED:
			return action;
		default:
			return state;
	}
}

const loginReducer = combineReducers({
	auth,
})

export default loginReducer;