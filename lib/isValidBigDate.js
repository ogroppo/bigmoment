// 1111-11-11 11:11:11+00:00
let rule = `^
  -?[0-9]{1,4}
    (-[0-9]{2}
      (-[0-9]{2}
        (\\s[0-9]{2}
          (:[0-9]{2}
            (:[0-9]{2}
              ([\\+-][0-9]{2}:[0-9]{2}
              )?
            )?
          )?
        )?
      )?
    )?
$`;

let regexString = rule.replace(/\s|\n/g, '');
const bigDateRegex = new RegExp(regexString);

module.exports = function isValidBigDate(arg){
	return bigDateRegex.test(arg);
}
