import { connect } from 'react-redux'
import { WHEELING_STATE, setWheelingState, wheeling } from 'alias_utils/js/actions'
import Wheel from './wheel.component'
const _s = (state) => {
	// console.log(state.commonReducer.wheelReducer.onWheeling%180);
	return {
		wheeling: state.commonReducer.wheelReducer.wheeling,
		deg: state.commonReducer.wheelReducer.onWheeling%120*3+"deg"
	}
}
const _d = (dispatch) => {
	return {
		wheelingPause:()=>{
			dispatch(setWheelingState(WHEELING_STATE.PAUSE));
		},
		wheelingRun:()=>{
			dispatch(setWheelingState(WHEELING_STATE.RUN));
		},
		onWheel:(bool)=>{
			dispatch(wheeling(bool))
		}
	}
}
export default connect(_s, _d)(Wheel);