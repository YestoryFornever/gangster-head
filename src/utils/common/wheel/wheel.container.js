import { connect } from 'react-redux'
import { setWheelingStatus, setWheelingDeg } from 'alias_utils/js/actions'
import Wheel from './wheel.component'
const _s = (state) => {
	return {
		// 控制轮盘转动状态
		wheeling: state.commonReducer.wheelReducer.wheelStatus,
		// 轮盘旋转角度
		deg: state.commonReducer.wheelReducer.wheelDeg%120*3+"deg"
	}
}
const _d = (dispatch) => {
	return {
		wheelingPause:()=>{
			dispatch(setWheelingStatus(false));
		},
		wheelingRun:()=>{
			dispatch(setWheelingStatus(true));
		},
		setWheelDeg:(directoin)=>{
			dispatch(setWheelingDeg(directoin))
		}
	}
}
export default connect(_s, _d)(Wheel);