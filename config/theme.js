const fs = require('fs');
const path = require('path');
const helpers = require('./helpers');
const pkgPath = path.join(helpers.root(), 'package.json');
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {};
let theme = {};
if (pkg.theme && typeof (pkg.theme) === 'string') {
	let cfgPath = pkg.theme;
	// relative path
	if (cfgPath.charAt(0) === '.') {
		cfgPath = path.resolve(helpers.root(), cfgPath);
	}
	const getThemeConfig = require(cfgPath);
	theme = getThemeConfig();
} else if (pkg.theme && typeof (pkg.theme) === 'object') {
	theme = pkg.theme;
}
module.exports = theme;