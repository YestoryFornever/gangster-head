import { _json } from 'alias_utils/js/fetch'
/*
 * action 类型
 */
export const UPDATE_ARTICLE_LIST = 'UPDATE_ARTICLE_LIST'

/*
 * action 创建函数
 */
export const updateArticles = (articles) => {
    return { type: UPDATE_ARTICLE_LIST, articles }
}
/**
 * fetch
 */
export const articleList = (opts) => (
    (dispatch) => {
        const { data, success, error } = opts;
        _json({
            type: "GET",
            url: "crud/article/list",
            data: data,
            success: req => {
                console.log(req);
                success && success(req);
            },
            error: err => {
                console.log(err);
                error && error();
            }
        });
    }
);