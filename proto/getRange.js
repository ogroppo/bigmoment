const partialDateFormatNames = ['millennium', 'century', 'decade'];

module.exports = function(unit){
  let formatName = this.getFormatName()

  var startOf, endOf
  switch (formatName) {
    case 'millennium':
      startOf = this.clone().startOf('year')
      endOf = startOf.clone().add(999, 'years').endOf('year')
      break;
    case 'century':
      startOf = this.clone().startOf('year')
      endOf = startOf.clone().add(99, 'years').endOf('year')
      break;
    case 'decade':
      startOf = this.clone().startOf('year')
      endOf = startOf.clone().add(9, 'years').endOf('year')
      break;
    default:
      startOf = this.clone().startOf(formatName)
      endOf = this.clone().endOf(formatName)
  }
  
  return endOf.diff(startOf, unit) + 1
}
