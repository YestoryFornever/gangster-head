import { _json } from '../../utils/fetch'
/*
 * action 类型
 */
export const TEST = 'TEST';

/*
 * action 创建函数
 */
export const test = (opts) => (
    (dispatch) => {
        const { data, success, error } = opts;
        _json({
            type: "GET",
            url: "/test",
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