// 设置轮盘旋转状态
export const SET_WHEELING_STATUS = 'SET_WHEELING_STATUS'
export function setWheelingStatus(status){
    return {
        type:SET_WHEELING_STATUS,
        status
    }
}
// 设置轮盘旋转角度
export const SET_WHEELING_DEG = 'SET_WHEELING_DEG'
export function setWheelingDeg(deg){
    return {
        type:SET_WHEELING_DEG,
        deg
    }
}