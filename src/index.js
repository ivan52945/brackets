module.exports = function check(str, bracketsConfig) {
	function ecran(symbol) {
		return (("[ ] \ ^ $ . | ? * + ( )").includes(symbol)) ? `\\${symbol}` : `${symbol}`;
	}
	const bracketExpGroup = [];
	bracketsConfig.forEach((element) => {
		bracketExpGroup.push(new RegExp(`${ecran(element[0])}${ecran(element[1])}`, "g"));
	});
	while (true) {
		let length = str.length;
		for (let exp of bracketExpGroup) {
			str = str.replace(exp, "");
		}
		if (str.length == length) { break; }
	}
	return (str.length > 0) ? false : true;
}