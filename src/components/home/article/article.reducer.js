import { combineReducers } from 'redux'

import articles from './article-list/article-list.reducer'
import runArticle from './article-run/article-run.reducer'

const articleReducer = combineReducers({
    articles,
    runArticle
})

export default articleReducer;