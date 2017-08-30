import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../../utils/actions'

const { SHOW_ALL } = VisibilityFilters
	
export default function home(state = SHOW_ALL, action){
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}