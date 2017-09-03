import { _json } from 'alias_utils/js/fetch'
/*
 * action 类型
 */


/*
 * action 创建函数
 */
export const article_list = (opts) => (
    (dispatch) => {
        const { data, success, error } = opts;
        _json({
            type: "GET",
            url: "article/list",
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