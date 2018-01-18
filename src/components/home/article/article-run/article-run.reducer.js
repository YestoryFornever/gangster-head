export default function runArticle(state = { title:'', content: '', time: undefined}, action) {
    switch (action.type) {
        case 'ARTICLE/RUN/READ':
            return action._
            break;
        default:
            return state
    }
}