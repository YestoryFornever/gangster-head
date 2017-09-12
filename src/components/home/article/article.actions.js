export * from './article-hit/article-hit.actions'
export * from './article-list/article-list.actions'
export * from './article-run/article-run.actions'

export const article$toggleSaveModal = (_) => {
    return {
        type:'ARTICLE/TOGGLE_SAVE_MODAL',
        _
    }
}