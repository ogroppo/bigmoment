const re = new RegExp("^-?[0-9]{4}-W[1-5][0-9]?$");
module.exports = function isWeekInput(arg){
	return typeof arg === 'string' && re.test(arg);
}
