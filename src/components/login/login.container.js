import { connect } from 'react-redux'
import { setAuthenticate } from 'alias_utils/js/actions'
import { history } from 'alias_utils/js/history'
import Login from './login.component'
const _s = (state) => {
	return {
		authenticated: state.login.auth
	}
}
const _d = (dispatch) => {
	return {
		onLogin: (auth) => {
			dispatch(setAuthenticate(auth));
			history.push('/manager');
		}
	}
}
export default connect(_s, _d)(Login);