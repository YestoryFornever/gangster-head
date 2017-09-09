export const SET_WHEELING_STATE = 'SET_WHEELING_STATE'
export const WHEELING_STATE = {
    RUN:'RUN',
    PAUSE:'PAUSE'
}
export function setWheelingState(state){
    return {
        type:SET_WHEELING_STATE,
        state
    }
}