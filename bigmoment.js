const moment = require('moment');

const config = require('./lib/config');
const {isValidBigDate, isPartialDate} = require('./lib/date');

function bigmoment(input){
	if(isValidBigDate(input)){
		var momentObject;
		if(isPartialDate(input)){ //not a complete moment date
			var momentInput;

			if(input[0] === "-"){
				momentInput = input.padEnd(4, "0") + "1"; 
				//eg -1 is padded to -1001 because it mostly belongs to -2000 ~ -1001 (2nd mill BCE)
				//eg -01 is padded to -0101 because it mostly belongs to -0200 ~ -0101 (2nd century BCE)
				//eg -001 is padded to -0011 because it mostly belongs to -0020 ~ -0011 (2nd decade BCE)
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

const {millennium, isMillennium} = require('./proto/millennium');

bigmoment.prototype.millennium = millennium;
bigmoment.prototype.isMillennium = isMillennium;

const {century, isCentury, hasCentury} = require('./proto/century');

bigmoment.prototype.century = century;
bigmoment.prototype.isCentury = isCentury;
bigmoment.prototype.hasCentury = hasCentury;

const {decade, isDecade, hasDecade} = require('./proto/decade');

bigmoment.prototype.decade = decade;
bigmoment.prototype.isDecade = isDecade;
bigmoment.prototype.hasDecade = hasDecade;

module.exports = bigmoment;