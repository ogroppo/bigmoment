import test from 'ava';

const bigmoment = require('../lib/bigmoment');

test('bigmoment millennium test', t => {

	t.is(bigmoment('0').millennium(), 0);
	t.is(bigmoment('-0').millennium(), -1);
	t.is(bigmoment('-0001').millennium(), -1);
	t.is(bigmoment('-1000').millennium(), -1);
	t.is(bigmoment('1').millennium(), 1);
	t.is(bigmoment('-1').millennium(), -2);
	t.is(bigmoment('-1999').millennium(), -2);
	t.is(bigmoment('10').millennium(), 1);
	t.is(bigmoment('-10').millennium(), -2);
	t.is(bigmoment('100').millennium(), 1);
	t.is(bigmoment('1000').millennium(), 1);
	t.is(bigmoment('-2000').millennium(), -2);
	t.is(bigmoment('-200').millennium(), -3);

	t.is(bigmoment('0').millennium({format: 'ordinal'}), "1st CE");
	t.is(bigmoment('-0').millennium({format: 'ordinal'}), "1st BCE");
	t.is(bigmoment('00').millennium({format: 'ordinal'}), "1st CE");
	t.is(bigmoment('-00').millennium({format: 'ordinal'}), "1st BCE");
	t.is(bigmoment('010').millennium({format: 'ordinal'}), "1st CE");
	t.is(bigmoment('0000').millennium({format: 'ordinal'}), "1st CE");
	t.is(bigmoment('-0000').millennium({format: 'ordinal'}), "1st CE");
	t.is(bigmoment('-0001').millennium({format: 'ordinal'}), "1st BCE");
	t.is(bigmoment('0100').millennium({format: 'ordinal'}), "1st CE");
	t.is(bigmoment('-0100').millennium({format: 'ordinal'}), "1st BCE");
	t.is(bigmoment('1000').millennium({format: 'ordinal'}), "2nd CE");
	t.is(bigmoment('-1000').millennium({format: 'ordinal'}), "1st BCE");
	t.is(bigmoment('2340').millennium({format: 'ordinal'}), "3rd CE");
	t.is(bigmoment('-2340').millennium({format: 'ordinal'}), "3rd BCE");
	t.is(bigmoment('-9999').millennium({format: 'ordinal'}), "10th BCE");
});

test('bigmoment isMillennium test', t => {
	t.true(bigmoment('0').isMillennium());
	t.true(bigmoment('-0').isMillennium());
	t.true(bigmoment('1').isMillennium());
	t.false(bigmoment('10').isMillennium());
	t.false(bigmoment('-10').isMillennium());
	t.false(bigmoment('100').isMillennium());
	t.false(bigmoment('-101').isMillennium());
	t.false(bigmoment('1000').isMillennium());
	t.false(bigmoment('-1021').isMillennium());
	t.false(bigmoment('-1021-11-22').isMillennium());
});