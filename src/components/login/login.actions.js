/*
 * action 类型
 */
export const AUTHENTICATED = 'AUTHENTICATED';

/*
 * action 创建函数
 */
export const setAuthenticate = (auth) => (
    {
        type: AUTHENTICATED,
        auth
    }
);