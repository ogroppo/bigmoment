const partialDateRegex = new RegExp("^-?[0-9]{1,3}$");
module.exports = function isPartialDate(arg){
	return typeof arg === 'string' && arg && partialDateRegex.test(arg);
}
