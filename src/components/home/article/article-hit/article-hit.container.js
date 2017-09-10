import { connect } from 'react-redux'
import ArticleList from './article-hit.component'

import { syncCode } from 'alias_utils/js/actions'

const _s = (state) => {
	return {
		code: state.homeReducer.articleReducer.runArticle
	}
}
const _d = (dispatch) => {
	return {
		sync: (code)=>{
			dispatch(syncCode(code))
		}
	}
}
export default connect(_s, _d)(ArticleList);