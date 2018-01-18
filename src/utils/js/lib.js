export const Path = {
	relative: function(str, n){
		let arr = str.split('/');
		arr.length -= n;
		return arr.join('/')
	},
	backto: function(str,key){
		return str.split(key)[0]+key;
	},
}
export const DateTime = {
	dateformat: function(d,format) {
       var date = {
              "M+": d.getMonth() + 1,
              "d+": d.getDate(),
              "h+": d.getHours(),
              "m+": d.getMinutes(),
              "s+": d.getSeconds(),
              "q+": Math.floor((d.getMonth() + 3) / 3),
              "S+": d.getMilliseconds()
       };
       if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (var k in date) {
              if (new RegExp("(" + k + ")").test(format)) {
                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return format;
	},
}