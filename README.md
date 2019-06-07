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

### String

#### Millennium

```
bigmoment('1') // 1000-01-01...
bigmoment('0') // 0000-01-01...
bigmoment('-0') // 0000-01-01...
bigmoment('-1') // -1000-01-01...
```

#### century
```
bigmoment('12') // 1200-01-01...
```

#### Decade
```
bigmoment('127') // 1270-01-01...
```

#### Full year
```
bigmoment('1492') // 1492-01-01...
bigmoment('-1492') // -1492-01-01...
```

#### Month
```
bigmoment('1492-01') // 1492-01-01...
```

#### Day
```
bigmoment('1999-12-31') // 1999-12-31T00:00...
```

#### Hour
```
bigmoment('1999-12-31 23') // 1999-12-31T23:00...
```

#### Minute
```
bigmoment('1999-12-31 23:59') // 1999-12-31T23:59:00...
```

## Methods

#### .century([options])
```
bigmoment('1000').century() // 10
```

```
bigmoment('00').century({format: 'ordinal'}), // 1st CE
bigmoment('-2340').century({format: 'ordinal'}), // 24th BCE
```

### moment sandbox

https://codepen.io/onestone/pen/YrQERX
