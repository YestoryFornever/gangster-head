import { connect } from 'react-redux'
import { setAuthenticate, article_list } from 'alias_utils/js/actions'
import ArticleList from './article-list.component'
const _s = (state) => {
	return {}
}
const _d = (dispatch) => {
	return {
		article_list: (n)=>{
			article_list({
				data:{},
				success: (req) => {
					console.log('suc');
				}, error: () => {
					console.log('err');
				}
			})();
		}
	}
}
export default connect(_s, _d)(ArticleList);