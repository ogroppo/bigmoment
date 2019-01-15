# bigmoment

Wrapper for momentjs with formatting support for BCE dates.

Also it allows to construct the object specifying only millennium (one digit), century (two digits), decade (three digits)

Please refer to https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Dates_and_numbers#Other

## Constructor

### undefined
```
bigmoment() // same as moment()
```

### Date
```
bigmoment(new Date()) // same as moment(new Date())
```

### Integer
```
bigmoment(1234567890000) // same as moment(1234567890000) -> 2009-02-13T23:31:30+00:00
```

### string

#### Partial date

```
bigmoment('1') // 1000-01-01...
bigmoment('0') // 0000-01-01...
bigmoment('-0') // 0000-01-01...
bigmoment('-1') // -1000-01-01...
bigmoment('12') // 1200-01-01...
bigmoment('127') // 1270-01-01...
```

#### Full year

```
bigmoment('1492') // 1492-01-01...
bigmoment('-1492') // -1492-01-01...
```




### moment sandbox

https://codepen.io/onestone/pen/YrQERX
