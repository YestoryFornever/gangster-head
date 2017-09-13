import { connect } from 'react-redux'
import ArticleList from './article-hit.component'

import {
	article_hit$sync_code,
	article$toggleSaveModal
} from 'alias_utils/js/actions'

const _s = (state) => {
	return {
		code: state.homeReducer.articleReducer.articleHitReducer.hitArticle,
		saveModalStatus: state.homeReducer.articleReducer.articleHitReducer.saveModalStatus
	}
}
const _d = (dispatch) => {
	return {
		sync: (code)=>{
			dispatch(article_hit$sync_code(code))
		},
		openSaveModal: () => {
			dispatch(article$toggleSaveModal(true))
		},
		closeSaveModal: () => {
			dispatch(article$toggleSaveModal(false))
		},
	}
}
export default connect(_s, _d)(ArticleList);