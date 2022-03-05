import test from 'ava';
import bigmoment from '../bigmoment';

test('mostRecentDate CE', t => {
	t.is(bigmoment('1').mostRecentDate().format(), '1999-12-31T23:59:59+00:00');
	t.is(bigmoment('0').mostRecentDate().format(), '0999-12-31T23:59:59+00:00');
	t.is(bigmoment('01').mostRecentDate().format(), '0199-12-31T23:59:59+00:00');
	t.is(bigmoment('11').mostRecentDate().format(), '1199-12-31T23:59:59+00:00');
	t.is(bigmoment('111').mostRecentDate().format(), '1119-12-31T23:59:59+00:00');
	t.is(bigmoment('1111').mostRecentDate().format(), '1111-12-31T23:59:59+00:00');
	t.is(bigmoment('1111-02').mostRecentDate().format(), '1111-02-28T23:59:59+00:00');
	t.is(bigmoment('1111-12-01').mostRecentDate().format(), '1111-12-01T23:59:59+00:00');
	t.is(bigmoment('1111-12-01 21').mostRecentDate().format(), '1111-12-01T21:59:59+00:00');
	t.is(bigmoment('1111-12-01 21:21').mostRecentDate().format(), '1111-12-01T21:21:59+00:00');
	t.is(bigmoment('1111-12-01 21:21:30').mostRecentDate().format(), '1111-12-01T21:21:30+00:00');
});

test('mostRecentDate BCE', t => {
	t.is(bigmoment('-0').mostRecentDate().format(), '-0001-12-31T23:59:59+00:00');
	t.is(bigmoment('-1').mostRecentDate().format(), '-1001-12-31T23:59:59+00:00');
	t.is(bigmoment('-21').mostRecentDate().format(), '-2101-12-31T23:59:59+00:00');
	t.is(bigmoment('-1111').mostRecentDate().format(), '-1111-12-31T23:59:59+00:00');
	t.is(bigmoment('-1111-12').mostRecentDate().format(), '-1111-12-31T23:59:59+00:00');
	t.is(bigmoment('-1111-12-01').mostRecentDate().format(), '-1111-12-01T23:59:59+00:00');
	t.is(bigmoment('-1111-12-01 01').mostRecentDate().format(), '-1111-12-01T01:59:59+00:00');
	t.is(bigmoment('-1111-12-01 23:59').mostRecentDate().format(), '-1111-12-01T23:59:59+00:00');
});
