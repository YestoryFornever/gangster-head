/*
 * action 创建函数
 */
export const article_run$read = (_) => {
    return { type: 'ARTICLE/RUN/READ', _ }
}
/**
 * fetch
 */
import { _json } from 'alias_utils/js/fetch'
export const fetchArticle = (opts) => (
    (dispatch) => {
        const { data, success, error } = opts;
        _json({
            type: "GET",
            url: "crud/article/read/"+data.id,
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