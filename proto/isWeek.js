module.exports = function isWeek(){
  let input = this._i
	return typeof input === 'string' && new RegExp("^-?[0-9]{4}-W[0-5][0-9]").test(input)
}
