import { combineReducers } from 'redux'
import { SET_WHEELING_STATUS, SET_WHEELING_DEG } from 'alias_utils/js/actions'
const wheelStatus = (state = true, action) => {
	switch (action.type) {
        case SET_WHEELING_STATUS:
            return action.status;
            break;
		default:
			return state
	}
}
const wheelDeg = (state = 0, action) => {
	switch (action.type) {
		case SET_WHEELING_DEG:
            return action.deg?state+1:state-1;
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