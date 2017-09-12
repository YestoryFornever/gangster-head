import { connect } from 'react-redux'
import { article$toggleSaveModal } from 'alias_utils/js/actions'
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
		}
	}
}
export default connect(_s, _d)(Article);