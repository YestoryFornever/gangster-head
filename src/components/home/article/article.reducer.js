import { combineReducers } from 'redux'

import articles from './article-list/article-list.reducer'
import hitArticle from './article-hit/article-hit.reducer'
import runArticle from './article-run/article-run.reducer'

const articleReducer = combineReducers({
    articles,
    hitArticle,
    runArticle
})

export default articleReducer;