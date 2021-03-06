import { connect } from 'react-redux'
import { setAuthenticate, home_test } from 'alias_utils/js/actions'
import { history } from 'alias_utils/js/history'
import Home from './home.component'
const _s = (state) => {
	return {
		authenticated: state.commonReducer.auth
	}
}
const _d = (dispatch) => {
	return {
		onLogin: ()=>{
			history.push('/login');
		},
		onLogout: (auth) => {
			dispatch(setAuthenticate(auth));
			history.push('/');
		},
		test: (n)=>{
			home_test({
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