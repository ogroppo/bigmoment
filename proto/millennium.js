const ordinalize = require('ordinalize');

exports.millennium = function(options = {}){
	const year = this.year();	
	let millenniumIndex = Math.floor( year / 1000 );
	if(year >= 0){
		if(options.format === 'ordinal'){
			let millenniumNumber = millenniumIndex + 1;
			return ordinalize(millenniumNumber) + ' CE';
		}
  	}else{
		if(options.format === 'ordinal'){
			let millenniumNumber = Math.abs(millenniumIndex);
			return ordinalize(millenniumNumber) + ' BCE';
		}
	}
  	
  	return millenniumIndex;
}

exports.isMillennium = function(){
	return new RegExp("^-?[0-9]$").test(this._input)
}