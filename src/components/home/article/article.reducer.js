import { combineReducers } from 'redux'

import articles from './article-list/article-list.reducer'
import articleHitReducer from './article-hit/article-hit.reducer'
import runArticle from './article-run/article-run.reducer'

const articleReducer = combineReducers({
    articles,
    articleHitReducer,
    runArticle,
})

export default articleReducer;