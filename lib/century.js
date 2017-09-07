const moment = require('moment');
const ordinalize = require('ordinalize');
const isValidDate = require('./isValidDate');
require('./config');

isCentury = function(arg){
	if(new RegExp("^-?[0-9]{2}$").test(arg)){
		return true;
	}

	return false;
}

hasCentury = function(arg){
	if(isValidDate(arg)){	
		if(new RegExp("^-?[0-9]{1,3}$").test(arg)){ //not a moment date
			if(new RegExp("^-?[0-9]{2,3}$").test(arg))
				return true;
			else
				return false;
		}else if(moment(arg, MomentFormat).isValid()){
			return true;
		}
	}

	return false;
}

getCentury = function(arg, options = {}){
	let m = moment(arg, MomentFormat);

	if(m.isValid()){
		let year = m.year();
		if(year < 0){
			let centuryDigit = Math.abs(year).toString().padStart(4, 0).slice(0, 2);

			if(options.format === 'numeric'){
				let centuryInt = -parseInt(centuryDigit) - 1;
				return centuryInt;
			}

			if(options.format === 'ordinal'){
				let centuryInt = -parseInt(centuryDigit) - 1;
				return ordinalize(Math.abs(centuryInt)) + ' BCE';
			}

			return '-'+ centuryDigit;
		}else{
			let centuryDigit = year.toString().padStart(4, 0).slice(0, 2);
			if(options.format === 'numeric'){
				let centuryInt = parseInt(centuryDigit);
				return centuryInt;
			}

			if(options.format === 'ordinal'){
				let centuryInt = parseInt(centuryDigit);
				return ordinalize(centuryInt + 1) + ' CE';
			}

			return centuryDigit;
		}
	}

	return null;
}