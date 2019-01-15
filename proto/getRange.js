module.exports = function(unit){
  switch (this.getFormatName()) {
    case 'month':
      switch (unit) {
        case 'weeks':
          console.log('to be imlemented');
          break;
        case 'days':
          console.log('to be imlemented');
          break;
        case 'hours':
          console.log('to be imlemented');
          break;
        case 'minutes':
          console.log('to be imlemented');
          break;
        default:
          return 1
      }
      break;
    case 'week':
      switch (unit) {
        case 'days':
          return 7
          break;
        case 'hours':
          return 7 * 24
          break;
        case 'minutes':
          return 7 * 24 * 60
          break;
        default:
          return 1
      }
      break;
    case 'day':
      switch (unit) {
        case 'hours':
          return 24
          break;
        case 'minutes':
          return 24 * 60
          break;
        default:
          return 1; //it would less than one but this is used to calculate the width of a shape so it defaults to 1
      }
      break;
    case 'hour':
      switch (unit) {
        case 'minutes':
          return 60
          break;
        default:
          return 1;
      }
      break;
    case 'minute':
      switch (unit) {
        case 'days':
          return 1/60/24
          break;
        case 'hours':
          return 1/60
          break;
        default:
          console.log('missing', this.getFormatName(), unit);

      }
      break;
    case 'second':
      switch (unit) {
        case 'hours':
        return 1/(60*60)
        break;
        default:
          console.log('missing', this.getFormatName(), unit);

      }
    default:
      console.log('missing', this.getFormatName(), unit);

  }

}
