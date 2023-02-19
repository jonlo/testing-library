export function sum(numbers: number[]): number {
	return numbers.reduce((previous:number, current:number) => previous + current);
}

export function average(numbers: number[]): number {
	return sum(numbers) / numbers.length;
}


