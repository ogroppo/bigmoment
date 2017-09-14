const ordinalize = require('ordinalize');

exports.decade = function(options = {}){
	if(!this.hasDecade())
		return undefined;
	
	const year = this.year();	
	let decadeIndex = Math.floor( year / 10 );

	if(options.format === 'cultural'){

		let decade = '';
		if(year >= 0){
			decade = `'${this._input.slice(2, 3)}0s`; 
	  	}else{
			decade = `'${this._input.slice(3, 4)}0s`; 
		}

		return decade;
	}

	if(options.format === 'chronological'){

		let decade = '';
		if(year >= 0){
			decade = `${this._input.slice(0, 3)}0s`; 
	  	}else{
			decade = `${this._input.slice(1, 4)}0s`; 
		}

		return decade;
	}

	return decadeIndex;
}

exports.isDecade = function(){
	return new RegExp("^-?[0-9]{3}$").test(this._input)
}

exports.hasDecade = function(){
	return new RegExp("^-?[0-9]{3,}$").test(this._input)
}