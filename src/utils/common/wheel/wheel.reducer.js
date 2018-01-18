import { combineReducers } from 'redux'
const wheelStatus = (state = true, action) => {
	switch (action.type) {
		case 'WHEELING_STATUS':
            return action._;
            break;
		default:
			return state
	}
}
const wheelDeg = (state = 0, action) => {
	switch (action.type) {
		case 'WHEELING_DEG':
            return action._?state+1:state-1;
            break;
		default:
			return state
	}
}

const wheelReducer = combineReducers({
	wheelStatus,
	wheelDeg
})

export default wheelReducer;