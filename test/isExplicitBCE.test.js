import test from 'ava';
import isExplicitBCE from '../lib/isExplicitBCE';
import bigmoment from '../bigmoment';

test('bigmoment week test', t => {
  t.is(isExplicitBCE('14 January 0027 BCE'), true);
	t.is(isExplicitBCE('14 January 0027'), false);
	
	console.log(bigmoment('14 January 0027').format());
});
