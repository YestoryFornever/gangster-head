import { connect } from 'react-redux'
import ArticleList from './article-hit.component'

import { article_hit$sync_code } from 'alias_utils/js/actions'

const _s = (state) => {
	return {
		code: state.homeReducer.articleReducer.hitArticle
	}
}
const _d = (dispatch) => {
	return {
		sync: (code)=>{
			dispatch(article_hit$sync_code(code))
		}
	}
}
export default connect(_s, _d)(ArticleList);