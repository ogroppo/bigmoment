import test from 'ava';
import bigmoment from '../bigmoment';

test('bigmoment#isHour', t => {

  t.is(bigmoment().isHour(), false);
  t.is(bigmoment(new Date('2018')).isHour(), false);
	t.is(bigmoment('2018').isHour(), false);
	t.is(bigmoment('-2018-12').isHour(), false);
	t.is(bigmoment('2018-12-12').isHour(), false);
	t.is(bigmoment('2018-12-12 22:22').isHour(), false);
	t.is(bigmoment('2018-12-12 22:22:22').isHour(), false);
  t.is(bigmoment('2018-W10').isHour(), false);

  t.is(bigmoment('2018-12-12 22').isHour(), true);
  t.is(bigmoment('2018-13-12 42').isHour(), true);
});
