import { connect } from 'react-redux'
import ArticleList from './article-hit.component'

import {
	fetchArticle,
	fetchCreateArticle,
	article_hit$title,
	article_hit$content,
	article$toggleSaveModal
} from 'alias_utils/js/actions'

const _s = (state) => {
	return {
		title: state.homeReducer.articleReducer.articleHitReducer.title,
		content: state.homeReducer.articleReducer.articleHitReducer.content,
		saveModalStatus: state.homeReducer.articleReducer.articleHitReducer.saveModalStatus
	}
}
const _d = (dispatch) => {
	return {
		sync: (content)=>{
			dispatch(article_hit$content(content))
		},
		editTitle: (text)=>{
			dispatch(article_hit$title(text))
		},
		openSaveModal: () => {
			dispatch(article$toggleSaveModal(true))
		},
		closeSaveModal: () => {
			dispatch(article$toggleSaveModal(false))
		},
		getArticle: (param)=>{
			fetchArticle({
				data: param,
				success: (data) => {
					dispatch(article_hit$content(data[0].content));
					dispatch(article_hit$title(data[0].title));
				}, error: () => {
					console.log('err');
				}
			})();
		},
		createArticle: (param) => {
			fetchCreateArticle({
				data: param,
				success: (data) => {
					console.log(data);
					dispatch(article$toggleSaveModal(false));
				}, error: () => {
					console.log('err');
				}
			})();
		}
	}
}
export default connect(_s, _d)(ArticleList);