import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from 'alias_components/login/login.reducer';
import homeReducer from 'alias_components/home/home.reducer';

const fnReducers = combineReducers({
	loginReducer,
	homeReducer,
	router: routerReducer
})

export default fnReducers;