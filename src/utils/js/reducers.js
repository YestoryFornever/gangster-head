import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import commonReducer from 'alias_utils/common/common.reducer'
import loginReducer from 'alias_components/login/login.reducer';
import homeReducer from 'alias_components/home/home.reducer';

const fnReducers = combineReducers({
	commonReducer,
	loginReducer,
	homeReducer,
	router: routerReducer
})

export default fnReducers;