import { connect } from 'react-redux'
import { fetchArticle } from 'alias_utils/js/actions'
import ArticleRun from './article-run.component'
const _s = (state) => {
	return {
		code: state.homeReducer.articleReducer.runArticle
	}
}
const _d = (dispatch) => {
	return {
		getArticle: (param) => {
			debugger;
			fetchArticle({
				data: param,
				success: (req) => {
					debugger;
					console.log(req);
				}, error: () => {
					console.log('err');
				}
			})();
		}
	}
}
export default connect(_s, _d)(ArticleRun);