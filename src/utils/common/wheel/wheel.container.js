import { connect } from 'react-redux'
import { wheeling$status, wheeling$deg, setAuthenticate } from 'alias_utils/js/actions'
import { history } from 'alias_utils/js/history'
import Wheel from './wheel.component'
const _s = (state) => {
	return {
		// 控制轮盘转动状态
		wheeling: state.commonReducer.wheelReducer.wheelStatus,
		// 轮盘旋转角度%6[每圈转动次数]*60[每次转动角度] +45保证了出场角度且在一个直角内可显示三项
		deg: (state.commonReducer.wheelReducer.wheelDeg*60),//+45
		authenticated: state.commonReducer.auth
	}
}
const _d = (dispatch) => {
	return {
		wheelingPause:()=>{
			dispatch(wheeling$status(false));
		},
		wheelingRun:()=>{
			dispatch(wheeling$status(true));
		},
		setWheelDeg:(directoin)=>{
			dispatch(wheeling$deg(directoin))
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