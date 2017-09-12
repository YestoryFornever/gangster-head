import { connect } from 'react-redux'
import { 
	article$toggleSaveModal,
	setAuthenticate, 
	fetchArticleList, 
	article_list$update 
} from 'alias_utils/js/actions'

import Article from './article.component'

const _s = (state) => {
	return {
		saveModalStatus: state.homeReducer.articleReducer.saveModalStatus
	}
}
const _d = (dispatch) => {
	return {
		openSaveModal:()=>{
			dispatch(article$toggleSaveModal(true))
		},
		closeSaveModal:()=>{
			dispatch(article$toggleSaveModal(false))
		},
		getArticleList: (n) => {
			debugger;
			fetchArticleList({
				data: {},
				success: (req) => {
					console.log(req);
					dispatch(article_list$update(req))
				}, error: () => {
					console.log('err');
				}
			})();
		}
	}
}
export default connect(_s, _d)(Article);