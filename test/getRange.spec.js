import test from 'ava';
import bigmoment from '../bigmoment';

test('#getRange years', t => {
	t.is(bigmoment('2').getRange('years'), 1000 );
	t.is(bigmoment('20').getRange('years'), 100 );
	t.is(bigmoment('201').getRange('years'), 10 );
	t.is(bigmoment('2018').getRange('years'), 1 );
	t.is(bigmoment('2016-02').getRange('years'), 1);
	t.is(bigmoment('2016-W01').getRange('years'), 1);
	t.is(bigmoment('2018-11-11').getRange('years'), 1);
	t.is(bigmoment('2018-11-11 22').getRange('years'), 1);
	t.is(bigmoment('2018-11-11 22:11').getRange('years'), 1);
	t.is(bigmoment('2018-11-11 22:11:11').getRange('years'), 1);
});

test('#getRange months', t => {
  t.is(bigmoment('2').getRange('months'), 1000 * 12);
  t.is(bigmoment('20').getRange('months'), 100 * 12);
  t.is(bigmoment('201').getRange('months'), 10 * 12 );
	t.is(bigmoment('2018').getRange('months'), 12 );
	t.is(bigmoment('2016-02').getRange('months'), 1);
  t.is(bigmoment('2016-W01').getRange('months'), 1);
	t.is(bigmoment('2018-11-11').getRange('months'), 1);
	t.is(bigmoment('2018-11-11 22').getRange('months'), 1);
	t.is(bigmoment('2018-11-11 22:11').getRange('months'), 1);
	t.is(bigmoment('2018-11-11 22:11:11').getRange('months'), 1);
});

test('#getRange weeks', t => {
  t.is(bigmoment('2').getRange('weeks'), 52178);
  t.is(bigmoment('20').getRange('weeks'), 5218);
  t.is(bigmoment('201').getRange('weeks'), 522);
	t.is(bigmoment('2018').getRange('weeks'), 53 );
	t.is(bigmoment('2016-02').getRange('weeks'), 5);
  t.is(bigmoment('2016-W01').getRange('weeks'), 1);
	t.is(bigmoment('2018-11-11').getRange('weeks'), 1);
	t.is(bigmoment('2018-11-11 22').getRange('weeks'), 1);
	t.is(bigmoment('2018-11-11 22:11').getRange('weeks'), 1);
	t.is(bigmoment('2018-11-11 22:11:11').getRange('weeks'), 1);
});

test('#getRange days', t => {
  t.is(bigmoment('2').getRange('days'), 365243);
  t.is(bigmoment('20').getRange('days'), 36525);
  t.is(bigmoment('201').getRange('days'), 3652);
	t.is(bigmoment('2018').getRange('days'), 365);
	t.is(bigmoment('2016-02').getRange('days'), 29);
  t.is(bigmoment('2016-W01').getRange('days'), 7);
	t.is(bigmoment('2018-11-11').getRange('days'), 1);
	t.is(bigmoment('2018-11-11 22').getRange('days'), 1);
	t.is(bigmoment('2018-11-11 22:11').getRange('days'), 1);
	t.is(bigmoment('2018-11-11 22:11:11').getRange('days'), 1);
});

test('#getRange hours', t => {
  t.is(bigmoment('2').getRange('hours'), 365243 * 24);
  t.is(bigmoment('20').getRange('hours'), 36525 * 24);
  t.is(bigmoment('201').getRange('hours'), 3652 * 24);
	t.is(bigmoment('2018').getRange('hours'), 365 * 24);
	t.is(bigmoment('2018-11').getRange('hours'), 30 * 24);
  t.is(bigmoment('2016-W01').getRange('hours'), 7 * 24);
	t.is(bigmoment('2018-11-11').getRange('hours'), 24);
	t.is(bigmoment('2018-11-11 22').getRange('hours'), 1);
	t.is(bigmoment('2018-11-11 22:11').getRange('hours'), 1);
	t.is(bigmoment('2018-11-11 22:11:11').getRange('hours'), 1);
});

test('#getRange minutes', t => {
  t.is(bigmoment('2').getRange('minutes'), 365243 * 24 * 60);
  t.is(bigmoment('20').getRange('minutes'), 36525 * 24 * 60);
  t.is(bigmoment('201').getRange('minutes'), 3652 * 24 * 60);
	t.is(bigmoment('2018').getRange('minutes'), 365 * 24 * 60);
	t.is(bigmoment('2018-11').getRange('minutes'), 30 * 24 * 60);
  t.is(bigmoment('2016-W01').getRange('minutes'), 7 * 24 * 60);
	t.is(bigmoment('2018-11-11').getRange('minutes'), 24 * 60);
	t.is(bigmoment('2018-11-11 22').getRange('minutes'), 60);
	t.is(bigmoment('2018-11-11 22:11').getRange('minutes'), 1);
	t.is(bigmoment('2018-11-11 22:11:11').getRange('minutes'), 1);
});

test('#getRange seconds', t => {
  t.is(bigmoment('2').getRange('seconds'), 365243 * 24 * 60 * 60);
  t.is(bigmoment('20').getRange('seconds'), 36525 * 24 * 60 * 60);
  t.is(bigmoment('201').getRange('seconds'), 3652 * 24 * 60 * 60);
	t.is(bigmoment('2018').getRange('seconds'), 365 * 24 * 60 * 60);
	t.is(bigmoment('2018-11').getRange('seconds'), 30 * 24 * 60 * 60);
  t.is(bigmoment('2016-W01').getRange('seconds'), 7 * 24 * 60 * 60);
	t.is(bigmoment('2018-11-11').getRange('seconds'), 24 * 60 * 60);
	t.is(bigmoment('2018-11-11 22').getRange('seconds'), 60 * 60);
	t.is(bigmoment('2018-11-11 22:11').getRange('seconds'), 60);
	t.is(bigmoment('2018-11-11 22:11:11').getRange('seconds'), 1);
});
