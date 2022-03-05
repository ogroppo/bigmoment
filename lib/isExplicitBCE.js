module.exports = function isExplicitBCE(arg){
	return typeof arg === 'string' && arg && arg.endsWith('BCE');
}
