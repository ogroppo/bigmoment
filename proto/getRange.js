module.exports = function(unit){
  if(this.isMillennium())
    return 0

  if(this.isCentury())
    return 0

  if(this.isDecade())
    return 0

  if(this.isYear())
    return 0

  if(this.isMonth())
    return 0

  if(this.isWeek())
    return 0

  if(this.isDay()){
    switch (unit) {
      case 'hours':
          return 24
        break;
      default:

    }
  }

  if(this.isHour()){
    switch (unit) {
      case 'hours':
          return 1
        break;
      default:

    }
  }

  if(this.isMinute()){
    switch (unit) {
      case 'hours':
          return 1/60
        break;
      default:

    }
  }

  if(this.isSecond()){
    switch (unit) {
      case 'hours':
          return 1/(60*60)
        break;
      default:

    }
  }
}
