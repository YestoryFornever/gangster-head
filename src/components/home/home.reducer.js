import { combineReducers } from 'redux'

import articleReducer from './article/article.reducer'

const home = (state = "SHOW_ALL", action) => {
	switch (action.type) {
		default:
			return state
	}
}

const homeReducer = combineReducers({
	home,
	articleReducer
})

export default homeReducer;