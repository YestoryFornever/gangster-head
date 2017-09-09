import { combineReducers } from 'redux'
import { SET_WHEELING_STATE, WHEELING_STATE, WHEELING } from 'alias_utils/js/actions'
const wheeling = (state = WHEELING_STATE.RUN, action) => {
	switch (action.type) {
        case SET_WHEELING_STATE:
            return action.state;
            break;
		default:
			return state
	}
}
const onWheeling = (state = 0, action) => {
	switch (action.type) {
		case WHEELING:
            return action.deg?state+1:state-1;
            break;
		default:
			return state
	}
}

const wheelReducer = combineReducers({
	wheeling,
	onWheeling
})

export default wheelReducer;