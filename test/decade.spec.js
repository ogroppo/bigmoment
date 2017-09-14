import test from 'ava';

const bigmoment = require('../bigmoment');

test('bigmoment decade test', t => {

	t.is(bigmoment('0').decade(), undefined);
	t.is(bigmoment('-0').decade(), undefined);
	t.is(bigmoment('10').decade(), undefined);
	t.is(bigmoment('-10').decade(), undefined);
	
	t.is(bigmoment('-0001').decade(), -1);
	t.is(bigmoment('-0010').decade(), -1);
	t.is(bigmoment('1000').decade(), 100);
	t.is(bigmoment('1031').decade(), 103);

	t.is(bigmoment('112').decade({format: 'chronological'}), '1120s');
	t.is(bigmoment('-112').decade({format: 'chronological'}), '1120s');
	t.is(bigmoment('-0001').decade({format: 'chronological'}), '0000s');
	t.is(bigmoment('-0010').decade({format: 'chronological'}), '0010s');
	t.is(bigmoment('1000').decade({format: 'chronological'}), '1000s');
	t.is(bigmoment('1031').decade({format: 'chronological'}), '1030s');

	t.is(bigmoment('112').decade({format: 'cultural'}), '\'20s');
	t.is(bigmoment('-112').decade({format: 'cultural'}), '\'20s');
	t.is(bigmoment('-0001').decade({format: 'cultural'}), '\'00s');
	t.is(bigmoment('-0010').decade({format: 'cultural'}), '\'10s');
	t.is(bigmoment('1000').decade({format: 'cultural'}), '\'00s');
	t.is(bigmoment('1030').decade({format: 'cultural'}), '\'30s');

});