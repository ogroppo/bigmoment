const ordinalize = require('ordinalize');

exports.decade = function(options = {}){
	if(!this.hasDecade())
		return undefined;

	const year = this.year();
	let decadeIndex = Math.floor( year / 10 );

	if(options.format === 'cultural'){

		let decade = '';
		if(year >= 0){
			decade = `'${this.format('YYYY').slice(2, 3)}0s`;
	  } else {
			decade = `'${this._i.padEnd(5, '0').slice(3, 4)}0s`;
		}

		return decade;
	}

	if(options.format === 'chronological'){

		let decade = '';
		if(year >= 0){
			decade = `${this.format('YYYY').slice(0, 3)}0s`;
	  } else {
			decade = `${this._i.padEnd(5, '0').slice(1, 4)}0s`;
		}

		return decade;
	}

  if(options.format){
    this.format('YYYY').slice(0, -1);
  }

	return decadeIndex;
}

exports.isDecade = function(){
  let input = this._i
	return typeof input === 'string' && new RegExp("^-?[0-9]{3}$").test(input)
}

exports.hasDecade = function(){
  let input = this._i
  if(typeof input !== 'string')
    return true
	return new RegExp("^-?[0-9]{3}").test(input)
}
