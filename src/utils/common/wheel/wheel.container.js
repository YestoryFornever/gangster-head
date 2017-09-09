import { connect } from 'react-redux'
import { WHEELING_STATE, setWheelingState } from 'alias_utils/js/actions'
import Wheel from './wheel.component'
const _s = (state) => {
	return {
		wheeling: state.commonReducer.wheelReducer.wheeling
	}
}
const _d = (dispatch) => {
	return {
		wheelingPause:()=>{
			dispatch(setWheelingState(WHEELING_STATE.PAUSE));
		},
		wheelingRun:()=>{
			dispatch(setWheelingState(WHEELING_STATE.RUN));
		}
	}
}
export default connect(_s, _d)(Wheel);