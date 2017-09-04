import { connect } from 'react-redux'
import { setAuthenticate, articleList, updateArticles } from 'alias_utils/js/actions'
import ArticleList from './article-list.component'
const _s = (state) => {
	return {
		articles: state.homeReducer.articleReducer.articles
	}
}
const _d = (dispatch) => {
	return {
		getArticleList: (n)=>{
			articleList({
				data:{},
				success: (req) => {
					console.log(req);
					dispatch(updateArticles(req))
				}, error: () => {
					console.log('err');
				}
			})();
		}
	}
}
export default connect(_s, _d)(ArticleList);