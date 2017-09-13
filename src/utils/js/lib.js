export const Path = {
	relative: function(str, n){
		let arr = str.split('/');
		arr.length -= n;
		return arr.join('/')
	},
	backto: function(str,key){
		return str.split(key)[0]+key;
	}
}