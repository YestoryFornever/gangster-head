/*
 * action 创建函数
 */
export const article_hit$sync_code = ( _ ) => {
    return { type: 'ARTICLE/HIT/SYNC_CODE', _ }
}
export const article$toggleSaveModal = (_) => {
    return {
        type: 'ARTICLE/TOGGLE_SAVE_MODAL',
        _
    }
}