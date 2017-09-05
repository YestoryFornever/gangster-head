import { SYNC_CODE } from 'alias_utils/js/actions'

export default function runArticle(state = "", action) {
    switch (action.type) {
        case SYNC_CODE:
            return action.code
            break;
        default:
            return state
    }
}