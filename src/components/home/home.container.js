import { connect } from 'react-redux'
import { setAuthenticate, test } from '../../utils/actions'
import { history } from '../../utils/history'
import Home from './home.component'
const _s = (state) => {
	// console.log(state);
	return {
		authenticated: state.login.auth
	}
}
const _d = (dispatch) => {
	return {
		onLogout: (auth) => {
			dispatch(setAuthenticate(auth));
			history.push('/');
		},
		test: (n)=>{
			test({
				data:{"n":2},
				success: (req) => {
					console.log('suc');
				}, error: () => {
					console.log('err');
				}
			})();
		}
	}
}
export default connect(_s, _d)(Home);