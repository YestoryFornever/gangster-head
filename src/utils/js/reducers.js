import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from 'alias_components/login/login.reducer';
import home from 'alias_components/home/home.reducer';

const fnReducers = combineReducers({
	login,
	home,
	router: routerReducer
})

export default fnReducers;