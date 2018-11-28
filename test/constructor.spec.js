import test from 'ava';
import bigmoment from '../bigmoment';

test('bigmoment invalid inputs', t => {
	t.false(bigmoment('-1021-22-22 222').isValid());
	t.false(bigmoment('021-22-22 222').isValid());
	t.false(bigmoment('-1021-22-22').isValid());
  t.false(bigmoment('').isValid());
	t.false(bigmoment(' ').isValid());
	t.false(bigmoment(' e').isValid());
});

test('bigmoment valid inputs', t => {
  t.true(bigmoment().isValid());
  t.true(bigmoment(' 2000 ').isValid());
  t.is(bigmoment(' 2000 ').format('YYYY'), '2000');
  t.true(bigmoment(new Date()).isValid());
  t.true(bigmoment('1121-11-1 22:22:111').isValid());
  t.true(bigmoment(2000).isValid());
  t.is(bigmoment(2000).format('YYYY-MM-DD HH:mm:ss'), '1970-01-01 01:00:02');
});
