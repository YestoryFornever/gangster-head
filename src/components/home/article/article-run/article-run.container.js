import { connect } from 'react-redux'
import { syncCode } from 'alias_utils/js/actions'
import ArticleRun from './article-run.component'
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
export default connect(_s, _d)(ArticleRun);