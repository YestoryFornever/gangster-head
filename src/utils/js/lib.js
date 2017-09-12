export const Path = {
	relative: (str, n) => {
		let arr = str.split('/');
		arr.length -= n;
		return arr.join('/')
	}
}