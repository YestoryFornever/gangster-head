import { AUTHENTICATED } from 'alias_utils/js/actions';
export default function login(state = false, action){
	// console.log(action);
	switch (action.type) {
		case AUTHENTICATED:
			return action;
		default:
			return state;
	}
}