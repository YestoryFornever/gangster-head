/*
 * action 类型
 */
export const SYNC_CODE = 'SYNC_CODE'

/*
 * action 创建函数
 */
export const syncCode = (code) => {
    return { type: SYNC_CODE, code }
}