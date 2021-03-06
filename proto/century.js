const ordinalize = require('ordinalize');

exports.century = function(options = {}){
	if(!this.hasCentury())
		return undefined;

	const year = this.year();
	let centuryIndex = Math.floor( year / 100 );
	if(year >= 0){
		if(options.format === 'ordinal'){
			let centuryNumber = centuryIndex + 1;
			return ordinalize(centuryNumber) + ' CE';
		}
  }else{
		if(options.format === 'ordinal'){
			let centuryNumber = Math.abs(centuryIndex);
			return ordinalize(centuryNumber) + ' BCE';
		}
	}

  return centuryIndex;
}

exports.isCentury = function(){
	return typeof this._i === 'string' && new RegExp("^-?[0-9]{2}$").test(this._i)
}

exports.hasCentury = function(){
  let input = this._i
  if(typeof input !== 'string')
    return true
	return new RegExp("^-?[0-9]{2,}$").test(input)
}
