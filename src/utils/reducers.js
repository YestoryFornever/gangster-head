import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from '../components/login/login.reducer';

const fnReducers = combineReducers({
	login,
	router: routerReducer
})

export default fnReducers;