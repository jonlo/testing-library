import { sum, average } from './stats';
import { describe, expect, it } from './testLib';
import * as statsAsync from './statsAsync';

describe('Stats should', () => {
	it('sum of [1, 2, 3] should be 6', () => {
		const result = sum([1, 2, 3]);
		const expected = 6;
		expect(expected).toBe(result);
	});
	
	it('average of [1, 2, 3] should be 2', () => {
		const result = average([1, 2, 3]);
		const expected = 2;
		expect(expected).toBe(result);
	});
});

describe ('StatsAsync should', () => {
	it('sum (async) of [1, 2, 3] should be 6', async () => {
		const result = await statsAsync.sum([1, 2, 3]);
		const expected = 6;
		expect(expected).toBe(result);
	});
	
	it('average (async) of [1, 2, 3] should be 2', async() => {
		const result = await statsAsync.average([1, 2, 3]);
		const expected = 2;
		expect(expected).toBe(result);
	});
});


