module.exports = function(){
  if(this.isMillennium())
    return 'millennium'

  if(this.isCentury())
    return 'century'

  if(this.isDecade())
    return 'decade'

  if(this.isYear())
    return 'year'

  if(this.isMonth())
    return 'month'

  if(this.isDay())
    return 'day'

  if(this.isHour())
    return 'hour'

  if(this.isMinute())
    return 'minute'

  if(this.isSecond())
    return 'second'
}
