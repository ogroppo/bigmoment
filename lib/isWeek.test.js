import test from 'ava';
import isWeek from './isWeek';

test('bigmoment week test', t => {
  t.is(isWeek(), false);
	t.is(isWeek('2018'), false);
	t.is(isWeek('-2018-12'), false);
	t.is(isWeek('2018-12-12'), false);
  t.is(isWeek('2018-W0'), false); //not iso

  t.is(isWeek('2018-W01'), true);
  t.is(isWeek('2018-W54'), true); //not valid week though
	t.is(isWeek('2018-W12'), true);
});
