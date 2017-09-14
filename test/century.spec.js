import test from 'ava';

const bigmoment = require('../bigmoment');

test('bigmoment century test', t => {

	t.is(bigmoment('0').century(), undefined);
	t.is(bigmoment('-0').century(), undefined);
	t.is(bigmoment('10').century(), 10);
	t.is(bigmoment('-10').century(), -11);
	t.is(bigmoment('-0001').century(), -1);
	t.is(bigmoment('-1000').century(), -10);
	t.is(bigmoment('-1999').century(), -20);
	t.is(bigmoment('100').century(), 10);
	t.is(bigmoment('1000').century(), 10);
	t.is(bigmoment('-2000').century(), -20);
	t.is(bigmoment('-200').century(), -21);
	t.is(bigmoment('-2001').century(), -21);

	t.is(bigmoment('00').century({format: 'ordinal'}), "1st CE");
	t.is(bigmoment('-00').century({format: 'ordinal'}), "1st BCE");
	t.is(bigmoment('010').century({format: 'ordinal'}), "2nd CE");
	t.is(bigmoment('0000').century({format: 'ordinal'}), "1st CE");
	t.is(bigmoment('-0000').century({format: 'ordinal'}), "1st CE");
	t.is(bigmoment('-0001').century({format: 'ordinal'}), "1st BCE");
	t.is(bigmoment('0100').century({format: 'ordinal'}), "2nd CE");
	t.is(bigmoment('-0100').century({format: 'ordinal'}), "1st BCE");
	t.is(bigmoment('1000').century({format: 'ordinal'}), "11th CE");
	t.is(bigmoment('-1000').century({format: 'ordinal'}), "10th BCE");
	t.is(bigmoment('2340').century({format: 'ordinal'}), "24th CE");
	t.is(bigmoment('-2340').century({format: 'ordinal'}), "24th BCE");
});

test('bigmoment isCentury test', t => {
	t.false(bigmoment('0').isCentury());
	t.false(bigmoment('-0').isCentury());
	t.false(bigmoment('1').isCentury());
	t.true(bigmoment('10').isCentury());
	t.true(bigmoment('-10').isCentury());
	t.false(bigmoment('100').isCentury());
	t.false(bigmoment('-101').isCentury());
	t.false(bigmoment('1000').isCentury());
	t.false(bigmoment('-1021').isCentury());
	t.false(bigmoment('-1021-11-22').isCentury());
});