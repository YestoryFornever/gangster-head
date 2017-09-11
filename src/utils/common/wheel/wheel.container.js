import { connect } from 'react-redux'
import { setWheelingStatus, setWheelingDeg, setAuthenticate } from 'alias_utils/js/actions'
import { history } from 'alias_utils/js/history'
import Wheel from './wheel.component'
const _s = (state) => {
	return {
		// 控制轮盘转动状态
		wheeling: state.commonReducer.wheelReducer.wheelStatus,
		// 轮盘旋转角度%120[每圈转动次数]*3[每次转动角度] +45保证了出场角度且在一个直角内可显示三项
		deg: (state.commonReducer.wheelReducer.wheelDeg%6*60),//+45
		authenticated: state.loginReducer.auth
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
		}, 
		onLogin: () => {
			history.push('/login');
		},
		onLogout: () => {
			dispatch(setAuthenticate(false));
			history.push('/');
		},
	}
}
export default connect(_s, _d)(Wheel);