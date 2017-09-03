export * from './article/article.reducer'
// import { SET_VISIBILITY_FILTER, VisibilityFilters } from 'alias_utils/js/actions'

/* const { SHOW_ALL } = VisibilityFilters*/
	
export default function home(state = "SHOW_ALL", action){
	switch (action.type) {
		default:
			return state
	}
}