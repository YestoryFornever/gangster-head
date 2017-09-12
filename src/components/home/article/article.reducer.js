import { combineReducers } from 'redux'

import articles from './article-list/article-list.reducer'
import hitArticle from './article-hit/article-hit.reducer'
import runArticle from './article-run/article-run.reducer'

const saveModalStatus = (state = false, action) => {
    switch (action.type) {
        case 'ARTICLE/TOGGLE_SAVE_MODAL':
            return action._
            break;
        default:
            return state
    }
}

const articleReducer = combineReducers({
    articles,
    hitArticle,
    runArticle,

    saveModalStatus
})

export default articleReducer;