const moment = require('moment');
const isWeek = require('./lib/isWeek');
const isPartialDate = require('./lib/isPartialDate');
const isExplicitBCE = require('./lib/isExplicitBCE');

function bigmoment(input, options = {}){
  if(typeof input !== 'string'){
    // undefined, integer, new Date()
    return moment(input);
  }



	if(isPartialDate(input)){ //not a complete moment string date
		var momentInput;
		if(input[0] === "-"){
      let inputLength = input.length
			momentInput = (input.substr(0, inputLength-1) + (parseInt(input.substr(-1)) + 1).toString()).padEnd(5, "0");
      //eg -0 => -1000 (~ -0001) (1st mill BCE)
			//eg -1 => -2000 (~ -1001) (2nd mill BCE)
			//eg -01 => -0200 (~ -0101) (2nd century BCE)
			//eg -001 => -0020 (~ -0011) (2nd decade BCE)
		}else{
      //eg 0 is padded to 0000 => 0000 ~ 0999 (1st mill CE)
			momentInput = input.padEnd(4, "0");
		}

    let momentObject = moment(momentInput, "Y");
    momentObject._i = input;
		return momentObject;
	}

  if(isWeek(input)){
    let momentObject = moment(input);
    momentObject._formatName = 'week';
    return momentObject;
  }

  //14 January 0027 BCE
  if(isExplicitBCE(input)){
    let cleanInput = input.replace(' BCE', '')
    return moment(cleanInput);
  }

  let defaultDateFormat = options.dateFormat || "Y-MM-DD HH:mm:ss"

  return moment(input, defaultDateFormat);
};

bigmoment.prototype = Object.getPrototypeOf(moment());

bigmoment.prototype.daysInYear = function(){
  return this.isLeapYear() ? 366 : 365;
};

bigmoment.prototype.getRange = require('./proto/getRange');

bigmoment.prototype.getFormatName = require('./proto/getFormatName');
bigmoment.prototype.mostRecentDate = require('./proto/mostRecentDate');

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

const {isYear} = require('./proto/year');

bigmoment.prototype.isYear = isYear;

const {isMonth} = require('./proto/month');

bigmoment.prototype.isMonth = isMonth;

const {isDay} = require('./proto/day');

bigmoment.prototype.isDay = isDay;

bigmoment.prototype.isHour = require('./proto/isHour');

const {isMinute} = require('./proto/minute');

bigmoment.prototype.isMinute = isMinute;

const {isSecond} = require('./proto/second');

bigmoment.prototype.isSecond = isSecond;

module.exports = bigmoment;
