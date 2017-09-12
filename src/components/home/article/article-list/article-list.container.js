import { connect } from 'react-redux'
import { setAuthenticate, fetchArticleList, article_list$update } from 'alias_utils/js/actions'
import ArticleList from './article-list.component'
const _s = (state) => {
	return {
		articles: state.homeReducer.articleReducer.articles
	}
}
const _d = (dispatch) => {
	return {
		getArticleList: ()=>{
			fetchArticleList({
				data:{},
				success: (req) => {
					// console.log(req);
					dispatch(article_list$update(req))
				}, error: () => {
					console.log('err');
				}
			})();
		}
	}
}
export default connect(_s, _d)(ArticleList);