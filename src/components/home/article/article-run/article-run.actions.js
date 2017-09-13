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