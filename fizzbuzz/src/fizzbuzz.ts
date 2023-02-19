export function convertNumber(number: number): string {
	if (divisibleByNumber(number, 15)) {
		return 'fizzbuzz';
	} else if (divisibleByNumber(number, 3)) {
		return 'fizz';
	} else if (divisibleByNumber(number, 5)) {
		return 'buzz';
	} else {
		return String(number);
	}
}

function divisibleByNumber(number: number, divisor: number): boolean {
	return number % divisor === 0;
}