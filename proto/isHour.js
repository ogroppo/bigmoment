module.exports = function isHour(){
  let input = this._i
	return typeof input === 'string' && new RegExp("^-?[0-9]{4}-[0-9]{2}-[0-9]{2}\\s[0-9]{2}$").test(input)
}
