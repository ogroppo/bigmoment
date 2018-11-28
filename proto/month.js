exports.isMonth = function(){
  let input = this._i
	return typeof input === 'string' && new RegExp("^-?[0-9]{4}-[0-9]{2}$").test(input)
}
