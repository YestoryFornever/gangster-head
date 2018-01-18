/*
 * action 创建函数
 */
export const article_list$update = (_) => {
    return { type: 'ARTICLE/LIST/UPDATE', _ }
}
/**
 * fetch
 */
import { _json } from 'alias_utils/js/fetch'
export const fetchArticleList = (opts) => (
    (dispatch) => {
        const { data, success, error } = opts;
        _json({
            type: "GET",
            url: "crud/article/list",
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
export const fetchDeleteArticle = (opts) => (
    (dispatch) => {
        const { data, success, error } = opts;
        _json({
            type: "GET",
            url: "crud/article/delete/"+data.id,
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