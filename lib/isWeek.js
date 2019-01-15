const re = new RegExp("^-?[0-9]{4}-W[0-5][0-9]");
module.exports = function isWeek(arg){
	return typeof arg === 'string' && re.test(arg);
}
