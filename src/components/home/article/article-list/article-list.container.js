import { connect } from 'react-redux'
import { setAuthenticate, 
	fetchArticleList, article_list$update,
	fetchDeleteArticle } from 'alias_utils/js/actions'
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
				success: (data) => {
					// console.log(data);
					dispatch(article_list$update(data))
				}, error: () => {
					console.log('err');
				}
			})();
		},
		deleteArticle: (param)=>{
			fetchDeleteArticle({
				data:param,
				success: (data) => {
					fetchArticleList({
						data:{},
						success: (data) => {
							// console.log(data);
							dispatch(article_list$update(data))
						}, error: () => {
							console.log('err');
						}
					})();
				}, error: () => {
					console.log('err');
				}
			})();
		},
	}
}
export default connect(_s, _d)(ArticleList);