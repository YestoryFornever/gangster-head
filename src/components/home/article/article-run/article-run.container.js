import { connect } from 'react-redux'
import { fetchArticle, article_run$read } from 'alias_utils/js/actions'
import ArticleRun from './article-run.component'
const _s = (state) => {
	return {
		code: state.homeReducer.articleReducer.runArticle.content
	}
}
const _d = (dispatch) => {
	return {
		getArticle: (param) => {
			fetchArticle({
				data: param,
				success: (data) => {
					dispatch(article_run$read(data[0]))
				}, error: () => {
					console.log('err');
				}
			})();
		}
	}
}
export default connect(_s, _d)(ArticleRun);