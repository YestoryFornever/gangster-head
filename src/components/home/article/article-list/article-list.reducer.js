export default function articles(state = [], action){
    switch (action.type) {
		case 'ARTICLE/LIST/UPDATE':
			return [
				...action._
			]
			break;
		default:
			return state
	}
}
/* import { SET_VISIBILITY_FILTER, VisibilityFilters } from 'alias_utils/js/actions'

const { SHOW_ALL } = VisibilityFilters
	
export default function home(state = SHOW_ALL, action){
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
} */