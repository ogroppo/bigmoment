const moment = require('moment');
const ordinalize = require('ordinalize');

const config = require('./config');
const {isValidBigDate, isPartialDate} = require('./date');

function bigmoment(input){
	if(isValidBigDate(input)){
		var momentObject;
		if(isPartialDate(input)){ //not a complete moment date
			var momentInput;

			if(input[0] === "-"){
				momentInput = input.padEnd(4, "0") + "1"; //eg -1 is padded to 1000 but it mostly belongs to 1001-1999 (2nd mill BCE)
			}else{
				momentInput = input.padEnd(4, "0");
			}
			
			momentObject = moment(momentInput, config.MomentFormat);

		}else{
			momentObject = moment(input, config.MomentFormat);
		}

		if(!momentObject.isValid())
			throw "Invalid date";
		
		momentObject._input = input;

		return momentObject;
	}else
		throw "Invalid date format";
};

bigmoment.prototype = Object.getPrototypeOf(moment());

bigmoment.prototype.millennium = function(options = {}){
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

bigmoment.prototype.isMillennium = function(){
	return new RegExp("^-?[0-9]$").test(this._input)
}

///////////////////////////////////////////////////////

bigmoment.prototype.century = function(options = {}){
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

bigmoment.prototype.isCentury = function(){
	return new RegExp("^-?[0-9]{2}$").test(this._input)
}

bigmoment.prototype.hasCentury = function(){
	return new RegExp("^-?[0-9]{2,}$").test(this._input)
}

module.exports = bigmoment;