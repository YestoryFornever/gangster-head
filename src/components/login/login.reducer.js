import { AUTHENTICATED } from '../../utils/actions';
export default function login(state = false, action){
	console.log(action);
	switch (action.type) {
		case AUTHENTICATED:
			return action;
		default:
			return state;
	}
}