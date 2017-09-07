// 1111-11-11T11:11+00:00
const bigDateRegex = new RegExp("^-?[0-9]{1,4}(-[0-9]{2}(-[0-9]{2}(T[0-9]{2}:[0-9]{2}:[0-9]{2}[\\+-][0-9]{2}:[0-9]{2})?)?)?$");
const partialDateRegex = new RegExp("^-?[0-9]{1,3}$");

module.exports.isValidBigDate = function(arg){
	return bigDateRegex.test(arg);
}

module.exports.isPartialDate = function(arg){
	return partialDateRegex.test(arg);
}