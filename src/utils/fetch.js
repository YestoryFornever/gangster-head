import promise from 'es6-promise'
import fetch from 'isomorphic-fetch'

promise.polyfill();

export const _json = (options) => {
	options.url = "http://easy-mock.com/mock/59a505e17b7ac306cc2ebc2f/example/" + options.url;
	const { url, type, data, ...others } = options;
	let opts = {
		...others,
		method: type || 'get',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}
	if (!!~['POST', 'PUT'].indexOf(opts.method.toUpperCase())) {
		opts.body = JSON.stringify(data)
	}
	fetch(url, opts)
		.then(resData => toJson(resData, opts))
		.then(resData => resHandler(resData, opts))
	// .catch(error => errorHandler(error, opts))
}

export const _form = (options) => {
	const { url, type, data, ...others } = options;
	let opts = {
		...others,
		method: type || 'get',
		credentials: 'include',
	}
	if (!!~['POST', 'PUT'].indexOf(opts.method.toUpperCase())) {
		opts.body = data
	}
	fetch(url, opts)
		.then(resData => toJson(resData, opts))
		.then(resData => resHandler(resData, opts))
	// .catch(error => errorHandler(error, opts))
}

const toJson = (resp, options) => {
	if (resp.status >= 400) {
		return errorHandler(null, options, resp.status)
	}
	return resp.json()
}

// success
const resHandler = (resData, options) => {
	if (resData.status && resData.status != 200) {
		return errorHandler(resData.error, options, resData.status);
	}
	if (!resData || resData.code > 20000) {
		options.error && options.error(resData)
		console.log(resData.message);
	} else {
		options.success && options.success(resData);
	}
}

// failure
const errorHandler = (error, options, status) => {
	options.error && options.error(error);
	console.log(`网络异常，请稍后重试(${status})`)
}
