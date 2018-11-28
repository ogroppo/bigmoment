module.exports = function(){
  if(this.isMillennium())
    return this.clone().add(1000, 'years').subtract(1, 'second')

  if(this.isCentury())
    return this.clone().add(100, 'years').subtract(1, 'second')

  if(this.isDecade())
    return this.clone().add(10, 'years').subtract(1, 'second')

  if(this.isYear())
    return this.endOf('year')

  if(this.isMonth())
    return this.endOf('month')

  if(this.isDay())
    return this.endOf('day')

  if(this.isHour())
    return this.endOf('hour')

  if(this.isMinute())
    return this.endOf('minute')

  if(this.isSecond())
    return this.endOf('second')
}
