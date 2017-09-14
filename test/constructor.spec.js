import test from 'ava';

const bigmoment = require('../bigmoment');

test('bigmoment constructs valid', t => {

	t.throws(()=> { bigmoment('-1021-22-22') });
	t.throws(()=> { bigmoment('-1021-22-') });
	t.throws(()=> { bigmoment('-1021--') });
	t.throws(()=> { bigmoment('--021--') });
	t.throws(()=> { bigmoment('') });
	t.throws(()=> { bigmoment(' ') });
	t.throws(()=> { bigmoment('e') });
	t.throws(()=> { bigmoment(0) });
});
