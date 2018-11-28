import test from 'ava';
import bigmoment from '../bigmoment';

test('bigmoment week test', t => {

  t.is(bigmoment().isWeek(), false);
	t.is(bigmoment('2018').isWeek(), false);
	t.is(bigmoment('-2018-12').isWeek(), false);
	t.is(bigmoment('2018-12-12').isWeek(), false);
  t.is(bigmoment('2018-W0').isWeek(), false); //not iso

  t.is(bigmoment('2018-W01').isWeek(), true);
  t.is(bigmoment('2018-W54').isWeek(), true); //not valid week though
	t.is(bigmoment('2018-W12').isWeek(), true);
});
