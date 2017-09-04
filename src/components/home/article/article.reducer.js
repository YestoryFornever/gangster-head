import { combineReducers } from 'redux'

import articles from './article-list/article-list.reducer'

const articleReducer = combineReducers({
    articles
})

export default articleReducer;