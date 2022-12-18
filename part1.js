const { input } = require('./input');

const sumsSorted = input
	.map((elf) => {
		return elf
			.split('\n')
			.map((item) => parseInt(item))
			.reduce((sum, v) => sum + v);
	})
	.sort((a, z) => z - a);

console.log(sumsSorted[0]);