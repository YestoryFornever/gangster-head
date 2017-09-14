/*
 * action 创建函数
 */
export const article_hit$content = ( _ ) => {
    return { type: 'ARTICLE/HIT/CONTENT', _ }
}
export const article_hit$title = (_) => {
    return { type: 'ARTICLE/HIT/TITLE', _ }
}
export const article$toggleSaveModal = ( _ ) => {
    return { type: 'ARTICLE/TOGGLE_SAVE_MODAL', _ }
}
/**
 * fetch
 */
import { _json } from 'alias_utils/js/fetch'
export const fetchCreateArticle = (opts) => (
    (dispatch) => {
        const { data, success, error } = opts;
        _json({
            type: "POST",
            url: "crud/article/create",
            data: data,
            success: req => {
                success && success(req.data);
            },
            error: err => {
                console.log(err);
                error && error();
            }
        });
    }
);
export const fetchUpdateArticle = (opts) => (
    (dispatch) => {
        const { data, success, error } = opts;
        _json({
            type: "POST",
            url: "crud/article/update/"+data.id,
            data: {
                title:data.title,
                content:data.content
            },
            success: req => {
                success && success(req.data);
            },
            error: err => {
                console.log(err);
                error && error();
            }
        });
    }
);