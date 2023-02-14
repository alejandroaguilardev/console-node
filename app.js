const { createFile } = require("./helpers/multiplicar");
const argv = require('./config/yargs')

console.clear();

// const [, , arg3] = process.argv;
// const [, base=5] = arg3.split('=')

// console.log(process.argv)
// console.log(argv.base);
const {base, listar, hasta} = argv;

createFile(base, listar, hasta)
	.then((nameFile) => console.log(nameFile, "create"))
	.catch((err) => console.log(err));
