import { combineReducers } from 'redux'
import { SET_WHEELING_STATE, WHEELING_STATE } from 'alias_utils/js/actions'
const wheeling = (state = WHEELING_STATE.RUN, action) => {
	switch (action.type) {
        case 'SET_WHEELING_STATE':
            return action.state;// === WHEELING_STATE.RUN?true:false;
            break;
		default:
			return state
	}
}

const wheelReducer = combineReducers({
	wheeling
})

export default wheelReducer;